import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
  it('should pass a basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should perform arithmetic correctly', () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });

  it('should handle arrays', () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
    expect(arr).toContain(2);
  });

  it('should handle objects', () => {
    const obj = { name: 'Test', value: 42 };
    expect(obj).toHaveProperty('name');
    expect(obj.value).toBe(42);
  });
});
