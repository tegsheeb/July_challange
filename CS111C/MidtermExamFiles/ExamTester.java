import java.util.*;

public class ExamTester {

	public static void main(String[] args) {
		System.out.println("******************************* TESTING LINKEDBAG DOUBLE METHOD *****");
		testDuplicateTheBag(new Integer[] {1, 2, 3}, "odd length bag");
		testDuplicateTheBag(new Integer[] {4, 5, 6, 7}, "odd length bag");
		testDuplicateTheBag(new Integer[] {1, 1, 2, 2, 3, 3}, "even length bag with duplicates");
		testDuplicateTheBag(new Integer[] {4, 4, 4}, "odd length bag with duplicates");
		testDuplicateTheBag(new Integer[] {}, "empty bag");
		testDuplicateTheBag(new Integer[] {4}, "singleton bag");
		testDuplicateTheBag(new String[] {"a", "b", "c"}, "test with Strings");

		System.out.println("\n******************************* TESTING LISTINTERFACE CLIENT DUPLICATE NEIGHBOR METHOD *****");
		testAddDuplicateNeighbors(new String[] {"a", "b", "c"}, "odd length list");
		testAddDuplicateNeighbors(new String[] {"a", "b", "c", "d"}, "even length list");
		testAddDuplicateNeighbors(new String[] {"a", "b", "a", "b"}, "list with repeats");
		testAddDuplicateNeighbors(new String[] {"a"}, "singleton list");
		testAddDuplicateNeighbors(new String[] {}, "empty list");

		System.out.println("\n******************************* TESTING ALIST ADDTOFRONT METHOD *****");
		// first parameter is the list contents; second parameter is the chain contents to add to the front
		testAddToFront(new Integer[] {1, 2, 3, 4, 5}, new Integer[] {10, 11, 12}, "odd length chain being added to front of odd length list");
		testAddToFront(new Integer[] {1, 2, 3, 4}, new Integer[] {10, 11, 12, 13}, "even length chain being added to front of even length list");
		testAddToFront(new Integer[] {1, 2, 4, 2}, new Integer[] {2, 4, 2, 1}, "chain with duplicates being added to front of list with duplicates");
		testAddToFront(new Integer[] {1}, new Integer[] {8}, "singleton chain being added to front of singleton list");
		testAddToFront(new Integer[] {}, new Integer[] {5, 6, 7, 8}, "even length chain being added to front of empty list");		
		testAddToFront(new Integer[] {}, new Integer[] {9, 10, 11}, "odd length chain being added to front of empty list");
		testAddToFront(new Integer[] {1, 2, 3, 4}, new Integer[] {}, "empty chain being added to front of even length list");
		testAddToFront(new Integer[] {1, 2, 3, 4, 5}, new Integer[] {}, "empty chain being added to front of odd length list");
		testAddToFront(new Integer[] {}, new Integer[] {}, "empty chain being added to front of empty list");
		testAddToFront(new String[] {"w", "o", "r", "k"}, new String[] {"n", "i", "c", "e"}, "test with Strings");
	

	}
	
	public static void addDuplicateNeighbors(ListInterface<String> list) {
		if(list.getLength() > 0) {
			int doubledSize = list.getLength() * 2;
			for (int i = 1; i <= doubledSize; i += 2) {
				list.add(i+1, list.getEntry(i));
			}
		}	
	}

	
	/*
	 * The methods below are designed to help support the tests cases run from main. You don't
	 * need to use, modify, or understand these methods. You can safely ignore them. :) 
	 * 
	 * Also, you can ignore the use of generics in the tester methods. These methods use
	 * generics at a level beyond which we use in our class. I only use them here to make this a robust 
	 * and useful testing file. You are NOT required to understand the use of generics in this way.
	 */
	
	public static <T> void testDuplicateTheBag(T[] originalBagContents, String testDescription) {
		LinkedBag<T> actualBag = new LinkedBag<T>();
		LinkedBag<T> duplicatedBag = new LinkedBag<T>();
		int originalSize = originalBagContents.length;
		int expectedDoubleSize = originalSize*2;
		for(T element : originalBagContents) {
			actualBag.add(element);
			duplicatedBag.add(element);
			duplicatedBag.add(element);
		}
		actualBag.duplicateTheBag();
		int actualDuplicatedSize = actualBag.getCurrentSize();
		T[] duplicatedBagArray = duplicatedBag.toArray();
		T[] actualBagArray = actualBag.toArray();
		boolean match = true;
		while(!duplicatedBag.isEmpty()) {
			T element = duplicatedBag.remove();
			if(!actualBag.remove(element)) {
				match = false;
			}
		}
		System.out.println("\nDuplicate bag contents: Before bag=" + Arrays.toString(originalBagContents) + " \t\t(size=" + originalSize +
				") \n\t\t\tAfter bag= " +  Arrays.toString(actualBagArray) + " \t(size=" + actualDuplicatedSize + ")");
		if(!match || !actualBag.isEmpty()) {
				System.out.println("\t***Test failed for: " + testDescription);
				System.out.println("\t   Expected contents after invoking method (order does NOT have to match): " + Arrays.toString(duplicatedBagArray));
		}
		if(actualDuplicatedSize!=expectedDoubleSize) {
			System.out.println("\t***Test failed for: " + testDescription);
			System.out.println("\t   Expected size after invoking duplicate method = " + expectedDoubleSize);
		}
	}
		
	public static <T extends Comparable<? super T>> void testAddToFront(T[] listContents, T[] nodeContents, String testDescription) {
		AList<T> list = new AList<T>();
		AList<T> expectedList = new AList<T>();
		for(T element : nodeContents) {
			expectedList.add(element);
		}
		for(T element : listContents) {
			list.add(element);
			expectedList.add(element);
		}
		ANode<T> chain = createANodeChain(nodeContents);
		list.addToFront(chain);
		
		boolean matchingContents = true;
		int listPos = 1;
		for(int i=0; i<nodeContents.length && matchingContents; i++, listPos++) {
			if(!list.getEntry(listPos).equals(nodeContents[i])) {
				matchingContents = false;
			}
		}
		for(int i=0; i<listContents.length && matchingContents; i++, listPos++) {
			if(!list.getEntry(listPos).equals(listContents[i])) {
				matchingContents = false;
			}
		}
		System.out.println("\nAdding chain to front: \tBefore add list=      " + Arrays.toString(listContents) + " \t(size=" + listContents.length +
				") \n\t\t\tChain to add to front=" +  Arrays.toString(nodeContents) + " \t(size=" + nodeContents.length + ")" +
				"\n\t\t\tList after adding=    " + Arrays.toString(list.toArray()) +  " \t(size=" + list.getLength() + ")");

		if(!matchingContents) {
			System.out.println("\t***Test failed for: " + testDescription);
			System.out.println("\t   Expected contents after invoking method: " + Arrays.toString(expectedList.toArray()) +  "\t(size=" + expectedList.getLength() + ")");
		}
		if(expectedList.getLength()!=list.getLength()) {
			System.out.println("\t***Test failed for: " + testDescription);
			System.out.println("\t   Expected size after invoking method = " + expectedList.getLength());
		}		
	}
	
	private static <T> ANode<T> createANodeChain(T[] array) {
		ANode<T> firstNode = null;
		if(array.length>0) {
			ANode<T> node = new ANode<T>(array[0]);
			firstNode = node;
			for(int i=1; i<array.length; i++) {
				ANode<T> newNode = new ANode<T>(array[i]);
				node.next = newNode;
				node = node.next;
			}
		}
		return firstNode;
	}
	
	public static void testAddDuplicateNeighbors(String[] contents, String testDescription) {
		ListInterface<String> list;
		ListInterface<String> expectedList;
		Random generator = new Random();
		if(generator.nextBoolean()) {
			list = new AList<String>();
			expectedList = new AList<String>();
		} else {
			list = new LList<String>();
			expectedList = new LList<String>();
		}
		for(String element : contents) {
			list.add(element);
			expectedList.add(element);
			expectedList.add(element);
		}
		addDuplicateNeighbors(list);
		
		boolean match = true;
		if(list.getLength()!=expectedList.getLength()) {
			match = false;
		}
		for(int i=1; i<=list.getLength() && match; i++) {
			if(!list.getEntry(i).equals(expectedList.getEntry(i)) ) {
				match = false;
			}
		}
		System.out.println("\nDuplicates added: List before invoking method=" + Arrays.toString(contents) + 
				"\n\t\t  List after invoking method= " +  Arrays.toString(list.toArray()));
		if(!match) {
				System.out.println("\t***Test failed for: " + testDescription);
				System.out.println("\t   Expected contents after invoking method: " + Arrays.toString(expectedList.toArray()));
		}

		
	}

	
	


}
