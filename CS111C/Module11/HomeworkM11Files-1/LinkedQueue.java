
/**
 * A class that implements the ADT queue by using a chain of nodes
 * that has both head and tail references.
 * 
 * @author Frank M. Carrano
 * @version 2.0
 */
public class LinkedQueue<T> implements QueueInterface<T>, java.io.Serializable {
	public Node firstNode; // references node at front of queue
	public Node lastNode;  // references node at back of queue
  	
	public LinkedQueue() 	{
		firstNode = null;
		lastNode = null;
	} 
	
	public void enqueue(T newEntry) 	{
		Node newNode = new Node(newEntry, null);
		
		if (isEmpty()) {
			firstNode = newNode;
		} else {
			lastNode.setNextNode(newNode);
		}

		lastNode = newNode;
	}

	public T getFront() 	{
		T front = null;
		
		if (!isEmpty()) {
			front = firstNode.getData();
		}
		
		return front;
	}

	public T dequeue() 	{
		T front = null;
		
		if (!isEmpty())	{
			front = firstNode.getData();
			firstNode = firstNode.getNextNode();
			
			if (firstNode == null) {
				lastNode = null;
			}
		} 
		
		return front;
	} 
		
	public boolean isEmpty() 	{
		return (firstNode == null) && (lastNode == null);
	} 
	
	public void clear() {
		firstNode = null;	
		lastNode = null;
	}
	
	public void display() {
		Node current = firstNode;
		while(current!=null) {
			System.out.print(current.data + " ");
			current = current.next;
		}
		System.out.println();
	}
	
	public void splice(LinkedQueue<T> anotherQueue) {
		if(!anotherQueue.isEmpty()) {
			Node currentFrontNode = anotherQueue.firstNode;
			while(currentFrontNode != null) {
				enqueue(currentFrontNode.data);
				currentFrontNode = currentFrontNode.next;
			}
		}
	} 
	
	public T getSecond() {
		T secondFront = null;
		
		if (!isEmpty()) {
			if (firstNode.next != null) {
				secondFront = firstNode.next.getData();
			}
		}
		
		return secondFront;
	}
	

	public class Node implements java.io.Serializable 	{
		public T    data; // entry in queue
		public Node next; // link to next node

		private Node(T dataPortion) {
			data = dataPortion;
			next = null;	
		} 
		
		private Node(T dataPortion, Node linkPortion){
			data = dataPortion;
			next = linkPortion;	
		} 

		private T getData() {
			return data;
		} 

		private void setData(T newData) {
			data = newData;
		} 

		private Node getNextNode() 	{
			return next;
		} 
		
		private void setNextNode(Node nextNode) 	{
			next = nextNode;
		} 
	} 

}