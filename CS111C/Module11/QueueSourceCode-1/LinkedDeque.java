/**
 * A class that implements the ADT deque by using a doubly linked chain of
 * nodes.
 * 
 * @author Frank M. Carrano
 * @author Timothy M. Henry
 * @version 5.0
 */
public class LinkedDeque<T> implements DequeInterface<T> {
	public DLNode firstNode; 
	public DLNode lastNode; 

	public LinkedDeque() {
		firstNode = null;
		lastNode = null;
	} 

	public void addToBack(T newEntry) {
		DLNode newNode = new DLNode(lastNode, newEntry, null);

		if (isEmpty()) {
			firstNode = newNode;
		} else {
			lastNode.next = newNode;
		}

		lastNode = newNode;
	}

	public void addToFront(T newEntry) {
		DLNode newNode = new DLNode(null, newEntry, firstNode);

		if (isEmpty()) {
			lastNode = newNode;
		} else {
			firstNode.previous = newNode;
		}

		firstNode = newNode;
	} 

	public T getBack() {
		if (isEmpty()) {
			throw new EmptyQueueException();
		} else {
			return lastNode.data;
		}
	} 

	public T getFront() {
		if (isEmpty()) {
			throw new EmptyQueueException();
		} else {
			return firstNode.data;
		}
	}

	public T removeFront() {
		T front = getFront(); // Might throw EmptyQueueException
							  // assert (firstNode != null);
		firstNode = firstNode.next;

		if (firstNode == null) {
			lastNode = null;
		} else {
			firstNode.previous = null;
		}

		return front;
	} 

	public T removeBack() {
		T back = getBack(); // Might throw EmptyQueueException
		  					// assert (lastNode != null);
		lastNode = lastNode.previous;

		if (lastNode == null) {
			firstNode = null;
		} else {
			lastNode.next = null;
		}
		return back;
	} 

	public void clear() {
		firstNode = null;
		lastNode = null;
	} 

	public boolean isEmpty() {
		return (firstNode == null) && (lastNode == null);
	} 

	public class DLNode {
		public T data; 
		public DLNode next; 
		public DLNode previous; 

		private DLNode(T dataPortion) {
			data = dataPortion;
			next = null;
			previous = null;
		} 

		private DLNode(DLNode previousNode, T dataPortion, DLNode nextNode) {
			data = dataPortion;
			next = nextNode;
			previous = previousNode;
		} 

		private T getData() {
			return data;
		} 

		private void setData(T newData) {
			data = newData;
		}
		
		private DLNode getNextNode() {
			return next;
		} 

		private void setNextNode(DLNode nextNode) {
			next = nextNode;
		} 

		private DLNode getPreviousNode() {
			return previous;
		} 

		private void setPreviousNode(DLNode previousNode) {
			previous = previousNode;
		} 
	} 
} // end LinkedDeque
