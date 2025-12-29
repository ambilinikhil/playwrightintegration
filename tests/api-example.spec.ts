import { test, expect } from '@playwright/test';

test('GET request - Verify user data', async ({ request }) => {
   
  const response = await request.get('https://reqres.in/api/users/2');   
  expect(response.status()).toBe(200);
   
  const json = await response.json();
  expect(json.data).toHaveProperty('email', 'janet.weaver@reqres.in');
  console.log('User name:', json.data.first_name, json.data.last_name);
});
