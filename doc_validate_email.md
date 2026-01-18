# validate_email


Validates if an email address is in the correct format.

### Parameters
- `email` (str): The email string to validate. Should contain '@' and '.' after '@'.

### Returns
- `bool`: True if email format is valid, False otherwise. Returns False if email is None, empty, or doesn't contain '@'.

### Examples
```python
validate_email("user@example.com")  # Returns True
validate_email("invalid")            # Returns False
validate_email("test@domain")        # Returns False (no dot after @)
```

### Validation Rules
- Email must contain exactly one '@' character
- There must be at least one '.' after the '@' character
