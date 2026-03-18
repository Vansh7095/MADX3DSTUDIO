import type { ContactPayload, OrderPayload } from './types'

type ApiResponse = {
  ok: boolean
  message: string
}

const postData = async <T extends ContactPayload | OrderPayload>(
  endpoint: string,
  payload: T,
): Promise<ApiResponse> => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to submit request')
  }

  return response.json()
}

export const submitContact = (payload: ContactPayload) =>
  postData('/api/contact', payload)

export const submitOrder = (payload: OrderPayload) => postData('/api/order', payload)
