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
        if (numberOfElements == listArray.length) {
            return false;
        } else {
            for (int i = numberOfElements; i >= 1; i--) {
                listArray[i] = listArray[i - 1];
            }
            listArray[0] = newEntry;
            numberOfElements++;
            return true;
        }
    }
    
	public boolean addBack(T newEntry) {
        if (numberOfElements == listArray.length) {
            return false;
        } else {
            listArray[numberOfElements] = newEntry;
            numberOfElements++;
            return true;
        }
    }
    
	public T removeFront() {
        if (numberOfElements == 0) {
            return null;
        } else {
            T removedElement = listArray[0];
            for (int i = 0; i < numberOfElements - 1; i++) {
                listArray[i] = listArray[i + 1];
            }
            listArray[numberOfElements - 1] = null;
            numberOfElements--;
            return removedElement;
        }	
    }
    
    public T removeBack() {
        if (numberOfElements == 0) {
            return null;
        } else {
            T removedElement = listArray[numberOfElements - 1];
            listArray[numberOfElements - 1] = null;
            numberOfElements--;
            return removedElement;
        }
    }
    
	public void clear() {
        for (int index = 0; index < numberOfElements; index++) {
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
        boolean found = false;
        int index = 0;

        while(!found && index < numberOfElements) {
            if(anEntry.equals(listArray[index])) {
                where = index;
                found = true;
            }
            index ++;
        }
        return where;
    }
    
	public int lastIndexOf(T anEntry) {
        int where = -1; 
        
        for (int i = 0; i < numberOfElements; i++) {
            if(anEntry.equals(listArray[i])) {
            }
        }

        return where;
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

        return "size=" + numberOfElements + "; capacity=" + listArray.length + ";   " + "[" + arrayString + "]";
    }
}