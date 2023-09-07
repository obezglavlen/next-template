import { ContactPayload, ContactResponse } from '@/types/contact';

class ContactApi {
  sendMessage(data: ContactPayload): Promise<ContactResponse> {
    return fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
}

export const contactApi = new ContactApi();
