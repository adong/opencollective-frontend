## Base

```jsx
<CreateExpenseForm onSubmit={console.log} />
```

## Mobile

```jsx
<div style={{ maxWidth: 375, height: 500, resize: 'horizontal' }}>
  <CreateExpenseForm name="expense-type-mobile" onChange={console.log} />
</div>
```
