def validate_email(email: str) -> bool:
    """
    Validates if an email address is in the correct format.
    
    Args:
        email: The email string to validate
        
    Returns:
        True if email format is valid, False otherwise
    """
    if not email or '@' not in email:
        return False
    parts = email.split('@')
    if len(parts) != 2:
        return False
    return '.' in parts[1]

def convert_to_binary(decimal: int) -> str:
    if decimal == 0:
        return "0"
    binary = ""
    while decimal > 0:
        binary = str(decimal % 2) + binary
        decimal //= 2
    return binary
