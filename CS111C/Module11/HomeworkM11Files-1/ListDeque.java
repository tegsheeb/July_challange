import java.util.ArrayList;
import java.util.List;

public class ListDeque<T> implements DequeInterface<T> {
    public List<T> deque;
	public int frontIndex;
	public int backIndex;

	private static final int DEFAULT_INITIAL_CAPACITY = 50;

	public ListDeque() {
		this(DEFAULT_INITIAL_CAPACITY);
    }
    
	public ListDeque(int initialCapacity) {
		deque = new ArrayList<T>(initialCapacity + 1);
		frontIndex = 0;
		backIndex = initialCapacity;
	}

	public void addToBack(T newEntry) { 
		ensureCapacity();
		backIndex = (backIndex + 1) % deque.size();
		deque.set(backIndex, newEntry);
	}

	public void addToFront(T newEntry) {
		ensureCapacity();
		frontIndex = (frontIndex - 1 + deque.size()) % deque.size();
		deque.set(frontIndex, newEntry);

	}

	public T getFront() {
		if (isEmpty()) {
			throw new EmptyQueueException();
		} else {
			return deque.get(frontIndex);
		}
	}

	public T getBack() {
		if(isEmpty()) {
			throw new EmptyQueueException();
		} else {
			return deque.get(backIndex);
		}
	}

	public T removeFront() { 
		if (isEmpty()) {
			throw new EmptyQueueException();
		} else {
			T front = deque.get(frontIndex);
			deque.set(frontIndex, null);
			frontIndex = (frontIndex + 1) % deque.size();
			return front;
		}
	}

	public T removeBack() {	
		if(isEmpty()) {
			throw new EmptyQueueException();
		} else {
			T back = deque.get(backIndex);
			deque.set(backIndex, null);
			backIndex = (backIndex - 1 + deque.size()) % deque.size(); 
			return back;
		}
	}

	public boolean isEmpty() {
		return frontIndex == ((backIndex + 1) % deque.size());
	}

	public void clear() {  
		if (!isEmpty()) {
			for (int index = frontIndex; index != backIndex; index = (index + 1) % deque.size()) {
				deque.set(index, null);
			}
			deque.set(backIndex, null);
		}
		frontIndex = 0;
		backIndex = deque.size() - 1;
	}

	private void ensureCapacity() {  
		if (frontIndex == ((backIndex + 2) % deque.size())) { 
			List<T> oldDeque = deque;
			int oldSize = oldDeque.size();
			int newSize = 2 * oldSize;

			List<T> tempDeque = new ArrayList<T>(newSize);
			deque = tempDeque;
			for (int index = 0; index < oldSize - 1; index++) {
                deque.set(index, oldDeque.get(frontIndex));
				frontIndex = (frontIndex + 1) % oldSize;
			} 

			frontIndex = 0;
			backIndex = oldSize - 2;
		} 
	}

}
