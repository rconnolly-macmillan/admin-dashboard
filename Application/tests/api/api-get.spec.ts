import { test, expect } from '@playwright/test';

test('should get an array of finance codes with all expected properties', async ({ request }) => {
    const response = await request.get('/api/finance-codes');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty('Form Code');
    expect(data[0]).toHaveProperty('Source');
    expect(data[0]).toHaveProperty('Budgetary Department');
    expect(data[0]).toHaveProperty('Freehold Code');
    expect(data[0]).toHaveProperty('Sub Region');
    expect(data[0]).toHaveProperty('Regular Payment Campaign Code');
    expect(data[0]).toHaveProperty('Regular Payment Promo Code');
});

test('first finance code in the table should have the form code "default"', async ({ request, page }) => {
    const response = await request.get('/api/finance-codes');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data[0]['Form Code']).toBe('default');

    await page.goto('/finance-codes');
    const firstRow = page.locator('table tbody tr').first();
    const formCodeCell = firstRow.locator('th').nth(0);
    const formCodeText = await formCodeCell.textContent();
    expect(formCodeText).toBe('default');
});

test('should take me to the details page with the correct details of the respective finaince code', async ({ request, page }) => {
    const response = await request.get('/api/finance-codes');
    const data = await response.json();
    const firstfinanceCode = data[0];
    await page.goto('/finance-codes');
    const firstRow = page.locator('table tbody tr').first();
    const formCodeCell = firstRow.locator('th').nth(0);
    const formCodeText = await formCodeCell.textContent();
    
    await firstRow.locator(`a[title="View Details of ${formCodeText}"]`).click();

    // Assuming the details page URL contains the form code as a query parameter
    await expect(page).toHaveURL(`/finance-codes/${formCodeText}`);
    
    // For each key in the first finance code, expect the matching th to have a sibling td with the correct value
    Object.keys(firstfinanceCode).forEach(async (key) => {
        const id= key.toLowerCase().replace(/ /g, '-');
        const tr = page.getByTestId(id);
        // const th = tr.locator('th');
        // const thText = await th.textContent();
        // expect(thText).toBe(key);
        const td = tr.locator('td');
        const tdText = await td.textContent();
        expect(tdText).toBe(firstfinanceCode[key]);
    });
});



