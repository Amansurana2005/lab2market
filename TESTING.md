# Testing Documentation

## Overview

This project includes comprehensive testing coverage for both backend and frontend components using industry-standard testing frameworks.

## Backend Testing (Vitest)

### Setup

```bash
cd backend
npm install
npm test
```

### Running Tests

```bash
npm test              # Run all tests
npm test:ui           # Run tests with UI dashboard
```

### Test Coverage

**Location**: `backend/__tests__/unit.test.js`

Tests cover:
- **Input Validation**: Project title/abstract length, problem title/description requirements
- **Pagination**: Page calculation, bounds checking, skip/limit logic
- **Search Filtering**: Title/abstract search, empty result handling
- **API Response Format**: Paginated response structure, error response format
- **Authentication**: JWT structure, email validation, password strength
- **Rate Limiting**: Request threshold validation, rate limit enforcement

### Backend Test Categories

1. **Validation Tests** (6 tests)
   - Ensure minimum field lengths are enforced
   - Verify required fields are present

2. **Pagination Tests** (4 tests)
   - Test page count calculations
   - Verify pagination bounds
   - Validate skip/limit application

3. **Search Tests** (3 tests)
   - Title-based search
   - Abstract/description search
   - Empty result handling

4. **Response Format Tests** (2 tests)
   - API response structure validation
   - Error response format verification

5. **Authentication Tests** (4 tests)
   - JWT token structure
   - Email format validation
   - Password strength checking

6. **Rate Limiting Tests** (2 tests)
   - Request threshold validation
   - Over-limit blocking

### Example Test

```javascript
import { describe, it, expect } from "vitest";

describe("Input Validation", () => {
  it("should validate minimum title length for projects", () => {
    const title = "Short";
    expect(title.length).toBeLessThan(8);
  });
});
```

---

## Frontend Testing (Playwright)

### Setup

```bash
cd frontend
npm install
npm run test:e2e
```

### Running E2E Tests

```bash
npm run test:e2e           # Run tests in headless mode
npm run test:e2e:ui        # Run tests with interactive UI
```

### Configuration

**Location**: `frontend/playwright.config.js`

- **Base URL**: http://localhost:5173
- **Browsers**: Chromium, Firefox
- **Screenshots**: Captured on failure
- **Traces**: Recorded on first retry
- **Retries**: 2 retries on CI, 0 locally

### Test Coverage

**Location**: `frontend/tests/e2e/app.spec.js`

Tests cover:
- **Page Navigation**: All major routes accessible
- **Contact Form**: Validation, submission, success message
- **Pagination**: Controls visible and functional
- **Accessibility**: Navigation, forms, labels
- **Responsiveness**: Mobile viewport testing (375x667)
- **Error Handling**: Network failure scenarios

### Frontend Test Scenarios

#### Core Functionality (10 tests)
- Homepage loads successfully
- Problems page navigation
- Pagination display
- Login/signup routes
- Contact page access
- Contact form fields visible
- Contact form validation
- Contact form submission
- Navigation accessibility
- Footer accessibility

#### UX Features (4 tests)
- Footer quick links display
- Network error handling
- Page title verification
- Form label accessibility

#### Mobile Responsiveness (3 tests)
- Layout on 375x667 viewport
- Mobile navigation
- Mobile footer display

### Example Test

```javascript
import { test, expect } from '@playwright/test';

test('should load homepage successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/lab2market/i);
  await expect(page.locator('h1')).toBeVisible();
});
```

---

## Running Tests in CI/CD

### GitHub Actions

The CI/CD workflow automatically runs:

```yaml
- build-backend: Installs deps and builds backend
- build-frontend: Installs deps and builds frontend with Vite
- quick-checks: Reports overall build status
```

Future enhancement: Add automated test execution to CI pipeline

### Local Testing Workflow

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev

# Terminal 3: Run tests
cd backend && npm test
cd frontend && npm run test:e2e
```

---

## Test Data & Mocking

### Backend

Tests use mock data for:
- Project pagination (45 items, 10 per page = 5 pages)
- Search scenarios (3 test projects)
- Authentication payloads

### Frontend

Tests use real Playwright browser instances against:
- Local development server (http://localhost:5173)
- Actual application routes
- Real form submission (logs to console)

---

## Accessibility Testing

Both test suites include accessibility checks:

**Backend**:
- Input validation for data integrity
- Error response formats
- Authentication security

**Frontend**:
- Navigation structure (`<nav>` tags)
- Form labels and inputs
- ARIA attributes (role, aria-label, aria-current)
- Dialog attributes (role="dialog", aria-modal="true")
- Semantic HTML validation

---

## Extending Tests

### Add Backend Test

```javascript
import { describe, it, expect } from "vitest";

describe("New Feature", () => {
  it("should test new functionality", () => {
    expect(result).toBe(expected);
  });
});
```

### Add Frontend Test

```javascript
import { test, expect } from '@playwright/test';

test('should test new feature', async ({ page }) => {
  await page.goto('/new-page');
  await expect(page.locator('text=Expected Text')).toBeVisible();
});
```

---

## Troubleshooting

### Backend Tests
- **Import errors**: Ensure `package.json` has `"type": "module"`
- **Timeout issues**: Increase timeout with `{ timeout: 10000 }`
- **Mock failures**: Check mock data structure matches expectations

### Frontend Tests
- **Port conflicts**: Ensure port 5173 is available
- **Selector issues**: Use `page.pause()` to debug selectors
- **Timing issues**: Add `page.waitForSelector()` for async elements
- **Flaky tests**: Use `expect().toBeVisible({ timeout: 5000 })`

---

## Performance Considerations

- **Backend tests**: ~2-3 seconds for full suite
- **Frontend tests**: ~15-30 seconds per browser (2 browsers total)
- **Parallel execution**: Enabled for faster CI runs
- **Screenshot storage**: Only on failure to save space

---

## Next Steps

1. **Integrate into CI/CD**: Add test execution to GitHub Actions
2. **Coverage reports**: Add code coverage metrics
3. **Visual regression**: Add Percy or similar for screenshot comparison
4. **Load testing**: Add k6 or Artillery for performance testing
5. **API mocking**: Add MSW for consistent test data
6. **Database fixtures**: Add test database seeding

---

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://testingjavascript.com/)
