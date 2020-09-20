public class DigitalReceipt extends Receipt {
  private String email;

  DigitalReceipt(Store store, int numberOfItems, double total, String receiptID, String email) {
    super(store, numberOfItems, total, receiptID);
    this.email = email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getEmail () {
    return email;
  }

  @Override
  public String toString() {
    return super.toString() + " Digital copy sent to: " + email;
  }

  static boolean validateEmail (String email) {
    boolean isAtSignExist = false;
    boolean isLettersBeforeAtSign = false;
    int countDots = 0;
    int lastDotIndex = 0;
    for (int i = 0; i < email.length(); i++) {
      if (email.charAt(i) == '@') {
        if (i > 0) {
          isAtSignExist = true;
          isLettersBeforeAtSign = Character.isLetter(email.charAt(i - 1));
        }
      }
      if (email.charAt(i) == '.') {
        countDots++;
        lastDotIndex = i;
      }
    }

    if (isAtSignExist && countDots > 0 && (lastDotIndex + 3 == email.length() - 1) && isLettersBeforeAtSign) {
      return true;
    } else {
      return false;
    }
  }
}
