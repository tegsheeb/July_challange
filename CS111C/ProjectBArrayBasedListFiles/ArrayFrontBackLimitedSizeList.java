import java.util.ArrayList;

public class ArrayFrontBackLimitedSizeList<T> implements FrontBackLimitedSizeListInterface<T> {

    private T[] listArray;
    private int numberOfElements;

    public ArrayFrontBackLimitedSizeList(int maximumSize) {
        @SuppressWarnings("unchecked")
        T[] tempList = (T[]) new Object[maximumSize];
        listArray = tempList;
        numberOfElements = 0;
    }

	public boolean addFront(T newEntry) {
		// TODO Auto-generated method stub
		return false;
    }
    
	public boolean addBack(T newEntry) {
		// TODO Auto-generated method stub
		return false;
    }
    
	public T removeFront() {
		// TODO Auto-generated method stub
		return null;
    }
    
    public T removeBack() {
		// TODO Auto-generated method stub
		return null;
    }
    
	public void clear() {
        for (int index = 1; index <= numberOfElements; index++) {
			listArray[index] = null;
		}

		numberOfElements = 0;
    }
    
	public T getEntry(int givenPosition) {
        if(validPosition(givenPosition)) {
            return listArray[givenPosition];
        } else {
            return null;
        }
    }
    
	public int indexOf(T anEntry) {
        int where = -1;

        for (int i = 0; i < numberOfElements; i++) {
            if(anEntry.equals(listArray[i])) {
                where = i;
            }
        }

        return where;
    }
    
	public int lastIndexOf(T anEntry) {
		// TODO Auto-generated method stub
		return 0;
    }
    
	public boolean contains(T anEntry) {
        return indexOf(anEntry) >= 0;
    }
    
	public int size() {
		return numberOfElements;
    }
    
	public boolean isEmpty() {
        return numberOfElements == 0;
    }

	public boolean isFull() {
        return listArray.length == numberOfElements;
    }
    
    private boolean validPosition(int position) {
		return position >= 0 && position <= numberOfElements;
    }
    
    @Override
    public String toString() {
        String arrayString = "";
        if (numberOfElements > 0) {
            for (int i = 0; i < numberOfElements; i++) {
                arrayString += listArray[i] + ", ";
            }
            arrayString = arrayString.substring(0, arrayString.length() - 2);
        }

        return "size=" + numberOfElements + "; capacity=" + listArray.length + "    " + "[" + arrayString + "]";
    }
}