public class Receipt {

  private Store store;
  private int numberOfItems;
  private double totalAmount;
  private String receiptId;
  public static final int DEFAULT_NUMBER_OF_ITEM = 1;

	public Receipt(Store store, int numberOfItems, double totalAmount, String receiptId) {
		this.store = store;
    this.numberOfItems = numberOfItems;
    this.totalAmount = totalAmount;
    this.receiptId = receiptId;
  }

  public Receipt (Store store, double totalAmount, String receiptId) {
    this(store, DEFAULT_NUMBER_OF_ITEM, totalAmount, receiptId);
  }

  public void setStore (Store store) {
    this.store = store;
  }

  public void setNumberOfItems (int numberOfItems) {
    if(numberOfItems > 0) {
      this.numberOfItems = numberOfItems;
    }
  }

  public void setTotalAmount (double totalAmount) {
    this.totalAmount = totalAmount;
  }

  public void setReceiptId (String receiptId) {
    this.receiptId = receiptId;
  }

  public Store getStore() {
    return store;
  }

  public int getNumberOfItems() {
    return numberOfItems;
  }

  public double getTotalAmount () {
    return totalAmount;
  }

  public String getReceiptId () {
    return receiptId;
  }


}