import java.util.*;


/**
 * A class of bags whose entries are stored in a chain of linked nodes. The bag
 * is never full.
 * 
 * @author Frank M. Carrano
 * @author Timothy M. Henry
 * @version 5.0
 */
public final class LinkedBag<T> implements BagInterface<T> {
	
	private Node firstNode; 
	private int numberOfEntries;

	public LinkedBag() {
		firstNode = null;
		numberOfEntries = 0;
	}

	public boolean add(T newEntry) 	{
		// Add to beginning of chain:
		Node newNode = new Node(newEntry);
		newNode.next = firstNode; // Make new node reference rest of chain
									// (firstNode is null if chain is empty)
		firstNode = newNode; // New node is at beginning of chain
		numberOfEntries++;

		return true;
	} 

	public T remove() {
		T result = null;
		if (firstNode != null) {
			result = firstNode.data;
			firstNode = firstNode.next; // Remove first node from chain
			numberOfEntries--;
		} 
		return result;
	} 
	public boolean remove(T anEntry) {
		boolean result = false;
		Node nodeN = getReferenceTo(anEntry);

		if (nodeN != null) {
			nodeN.data = firstNode.data; // Replace located entry with entry in first node
			firstNode = firstNode.next; // Remove first node
			numberOfEntries--;
			result = true;
		} 

		return result;
	}

	public void clear() {
		while (!isEmpty()) {
			remove();
		}
	} 

	public int getFrequencyOf(T anEntry) {
		int frequency = 0;
		Node currentNode = firstNode;

		while (currentNode != null) {
			if (anEntry.equals(currentNode.data)) {
				frequency++;
			} 
			currentNode = currentNode.next;
		} 
		return frequency;
	} 

	public boolean contains(T anEntry) {
		boolean found = false;
		Node currentNode = firstNode;

		while (!found && (currentNode != null)) {
			if (anEntry.equals(currentNode.data)) {
				found = true;
			} else {
				currentNode = currentNode.next;
			}
		} 

		return found;
	} 

	public boolean isEmpty() {
		return numberOfEntries == 0;
	}

	public int getCurrentSize() {
		return numberOfEntries;
	} 

	public T[] toArray() {
		// The cast is safe because the new array contains null entries
		@SuppressWarnings("unchecked")
		T[] result = (T[]) new Object[numberOfEntries]; // Unchecked cast

		int index = 0;
		Node currentNode = firstNode;
		while (currentNode != null) {
			result[index] = currentNode.data;
			index++;
			currentNode = currentNode.next;
		} 

		return result;
	} 
	
	// Locates a given entry within this bag.
	// Returns a reference to the node containing the entry, if located, or null otherwise.
	private Node getReferenceTo(T anEntry) {
		boolean found = false;
		Node currentNode = firstNode;

		while (!found && (currentNode != null)) {
			if (anEntry.equals(currentNode.data)) {
				found = true;
			} else {
				currentNode = currentNode.next;
			}
		} 

		return currentNode;
	} 


	public void duplicateTheBag() {
		if(numberOfEntries != 0) {
			T tmp = remove();
			duplicateTheBag();
			add(tmp);
			add(tmp);
		}
	}
	
	private class Node {
		private T data; 
		private Node next; 

		private Node(T dataPortion) {
			this(dataPortion, null);
		} 

		private Node(T dataPortion, Node nextNode) {
			data = dataPortion;
			next = nextNode;
		} 
	} 

}
