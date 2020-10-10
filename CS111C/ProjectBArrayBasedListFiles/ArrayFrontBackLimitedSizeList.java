public class ArrayFrontBackLimitedSizeList<T> implements FrontBackLimitedSizeListInterface<T> 

    private T[] listArray;
    private int numberOfElements;

    public ArrayFrontBackLimitedSizeList(int maximumSize) {
        T[] listArray = (T[]) new Object[maximumSize];
        numberOfElements = 0;
    }

	@Override
	public boolean addFront(T newEntry) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean addBack(T newEntry) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public T removeFront() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public T removeBack() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void clear() {
		// TODO Auto-generated method stub
		
	}
	@Override
	public T getEntry(int givenPosition) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public int indexOf(T anEntry) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int lastIndexOf(T anEntry) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public boolean contains(T anEntry) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public int size() {
		return numberOfElements;
	}
	@Override
	public boolean isEmpty() {
        return numberOfElements == 0;
    }

    @Override
	public boolean isFull() {
		// TODO Auto-generated method stub
		return false;
	}
}