import jdk.nashorn.internal.runtime.arrays.NumericElements;

public class Receipt {

  private Store store;
  private int numberOfItems;
  private double total;
  private String receiptID;
  public static final int DEFAULT_NUMBER_OF_ITEM = 1;

	public Receipt(Store store, int numberOfItems, double total, String receiptID) {
		this.store = store;
    this.numberOfItems = numberOfItems;
    this.total = total;
    this.receiptID = receiptID;
  }

  public Receipt (Store store, double total, String receiptID) {
    this(store, DEFAULT_NUMBER_OF_ITEM, total, receiptID);
  }

  public void setStore (Store store) {
    this.store = store;
  }

  public void setNumberOfItems (int numberOfItems) {
    if(numberOfItems > 0) {
      this.numberOfItems = numberOfItems;
    }
  }

  public void setTotal (double total) {
    this.total = total;
  }

  public void setReceiptID (String receiptID) {
    this.receiptID = receiptID;
  }

  public Store getStore() {
    return store;
  }

  public int getNumberOfItems() {
    return numberOfItems;
  }

  public double getTotal () {
    return total;
  }

  public String getReceiptID () {
    return receiptID;
  }

  @Override
  public String toString() {
    return "Receipt " + receiptID + " Store: " + store + "" + numberOfItems + (numberOfItems > 1 ? " items" : " item") + " Total:$" + total;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj instanceof Receipt) {
      Receipt other = (Receipt) obj;
      return this.store.equals(other.store) &&
        (this.numberOfItems == other.numberOfItems) &&
        (this.total == other.total) && this.receiptID.equalsIgnoreCase(other.receiptID);
    } else {
      return false;
    }
  }

  public boolean meetsReceiptCriteria(char firstChar,  char secondChar,  int timesAfter) {
    for (int i = 0; i < receiptID.length(); i++) {
      if (receiptID.charAt(i) == firstChar) {
        int counter = 0;
        for (int j = i + 1; j < receiptID.length(); j++) {
          if (receiptID.charAt(j) == secondChar) {
            counter++;
          }
        }
        if(counter == timesAfter) {
          return true;
        }
      }
    }
    return false;
  }
}