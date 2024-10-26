import { describe, it, expect } from "vitest";

describe('Repro', () => {

	it('should display 1 passed test on results', () => {
		const res = true
		expect(res).toBe(true)
	})

	it.skip('should display 1 skipped test on results', () => {
		const res = true
		expect(res).toBe(true)
	})

	// Comment both tests above to make this todo appear
	it.todo('should display 1 todo test on results but wont appear', () => {
		const res = true
		expect(res).toBe(true)
	})

})
