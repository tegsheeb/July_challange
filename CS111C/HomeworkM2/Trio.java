public class Trio<T> {
  private T item1, item2, item3;

  public Trio(T item1, T item2, T item3) {
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
  }

  public Trio(T item1) {
    this(item1, item1, item1);
  }

  public T getItem1(){
    return item1;
  }

  public T getItem2(){
    return item2;
  }

  public T getItem3(){
    return item3;
  }

  public void setItem1(T item1) {
    this.item1 = item1;
  }

  public void setItem2(T item2) {
    this.item2 = item2;
  }

  public void setItem3(T item3) {
    this.item3 = item3;
  }

  @Override
  public String toString() {
    return item1.toString() + "\t" + item2.toString() + "\t" + item3.toString();
  }

  public void replaceAll(T item) {
    this.item1 = item;
    this.item2 = item;
    this.item3 = item;
  }

  public boolean hasDuplicates(){
    boolean isDuplicate = this.item1.equals(this.item2) || this.item1.equals(this.item3) || this.item2.equals(this.item3);
    return isDuplicate;
  }

  public int count(T value){
    int count = 0;
    if(this.item1.equals(value)) {
      count += 1;
    }
    if(this.item2.equals(value)) {
      count += 1;
    }
    if(this.item3.equals(value)) {
      count += 1;
    }
    return count;
  }

  @Override
  public boolean equals(Object obj) {
    if(obj instanceof Trio<?>) {
      Trio<T> otherTrio = (Trio<T>) obj;
      if(this.count(otherTrio.getItem1()) > 0 && this.count(otherTrio.getItem2()) > 0 && this.count(otherTrio.getItem3()) > 0) {
        if(!this.hasDuplicates() && !otherTrio.hasDuplicates()){
          return true;
        } else {
          if((this.getItem1()).equals(this.getItem2())) {
            return otherTrio.count(this.getItem1())==2;
          }
          if((this.getItem1()).equals(this.getItem3())) {
            return otherTrio.count(this.getItem1())==2;
          }
          if((this.getItem2()).equals(this.getItem3())) {
            return otherTrio.count(this.getItem2())==2;
          }
        }
      }
      return false;
    }
    return false;
  }
}
