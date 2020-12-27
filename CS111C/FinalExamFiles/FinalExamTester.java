import java.util.*;

public class FinalExamTester {

	public static void main(String[] args) {

		/***************************************************************************************************************/
		System.out.println("*************************************** TESTING LINKED QUEUE CONSECUTIVE DUPLICATES *****");
		LinkedQueue<Integer> numberQ = new LinkedQueue<Integer>();
		
		// *********************** TESTING CASES WITH NO CONSECUTIVE DUPLICATES
		// empty queue
		boolean consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [] back \t\t\tconsecutive dups?  false:" + consecutiveDups);

		// singleton queue
		numberQ.enqueue(3);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [3] back \t\t\tconsecutive dups?  false:" + consecutiveDups);
		
		// no consecutive duplicates, all unique elements
		numberQ.clear(); numberQ.enqueue(1); numberQ.enqueue(2);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2] back \t\tconsecutive dups?  false:" + consecutiveDups);
		
		// duplicate elements but not consecutive
		numberQ.enqueue(1);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2, 1] back \t\tconsecutive dups?  false:" + consecutiveDups);
		
		// *********************** TESTING CASES WITH CONSECUTIVE DUPLICATES
		numberQ.enqueue(4); numberQ.enqueue(4);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2, 1, 4, 4] back \tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(3);numberQ.enqueue(3);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [3, 3] back \t\tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(5); numberQ.enqueue(5); numberQ.enqueue(3);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [5, 5, 3] back \t\tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(3);numberQ.enqueue(3); numberQ.enqueue(5);numberQ.enqueue(3); 
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [3, 3, 5, 3] back \tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(1);numberQ.enqueue(2); numberQ.enqueue(5);numberQ.enqueue(5); 
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2, 5, 5] back \tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(1);numberQ.enqueue(2); numberQ.enqueue(5);numberQ.enqueue(5); numberQ.enqueue(2);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2, 5, 5, 2] back \tconsecutive dups?  true:" + consecutiveDups);
		
		numberQ.clear(); numberQ.enqueue(1);numberQ.enqueue(2); numberQ.enqueue(5);numberQ.enqueue(5); numberQ.enqueue(2); numberQ.enqueue(1);
		consecutiveDups = numberQ.hasConsecutiveDuplicates();
		System.out.println("front [1, 2, 5, 5, 2, 1] back \tconsecutive dups?  true:" + consecutiveDups);
		
		// *********************** test with a different data type- Strings
		LinkedQueue<String> wordQ = new LinkedQueue<String>();
		wordQ.enqueue(new String("hi")); wordQ.enqueue(new String("hi"));
		consecutiveDups = wordQ.hasConsecutiveDuplicates();
		System.out.println("front [\"hi\", \"hi\"] back \tconsecutive dups?  true:" + consecutiveDups);
	
		// *********************** check that invoking the new the method didn't alter the queue
		System.out.println("Front element is 1: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Front element is 2: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Front element is 5: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Front element is 5: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Front element is 2: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Front element is 1: " + numberQ.getFront());
		numberQ.dequeue(); System.out.println("Queue is now empty? true: " + numberQ.isEmpty());
		
		
		/***************************************************************************************************************/
		System.out.println("\n*************************************** TESTING ARRAY STACK CONSECUTIVE DUPLICATES *****");
		ArrayStack<Integer> numberStack = new ArrayStack<Integer>();
		
		// *********************** TESTING CASES WITH NO CONSECUTIVE DUPLICATES
		// empty stack
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [] top \t\t\tconsecutive dups?  false:" + consecutiveDups);

		// singleton stack
		numberStack.push(3);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [3] top \t\t\tconsecutive dups?  false:" + consecutiveDups);

		// no consecutive duplicates, all unique elements
		numberStack.clear(); numberStack.push(1); numberStack.push(2);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2] top \t\tconsecutive dups?  false:" + consecutiveDups);

		// duplicates, but not consecutive
		numberStack.push(1);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 1] top \t\tconsecutive dups?  false:" + consecutiveDups);

		// *********************** TESTING CASES WITH CONSECUTIVE DUPLICATES
		numberStack.push(4); numberStack.push(4);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 1, 4, 4] \t\tconsecutive dups?  true:" + consecutiveDups);

		numberStack.clear(); numberStack.push(3);numberStack.push(3);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [3, 3] top \t\tconsecutive dups?  true:" + consecutiveDups);

		numberStack.clear(); numberStack.push(5); numberStack.push(5); numberStack.push(3);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [5, 5, 3] top \t\tconsecutive dups?  true:" + consecutiveDups);
		
		numberStack.clear(); numberStack.push(3);numberStack.push(3); numberStack.push(5);numberStack.push(3); 
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [3, 3, 5, 3] top \tconsecutive dups?  true:" + consecutiveDups);
		
		numberStack.clear(); numberStack.push(1);numberStack.push(2); numberStack.push(5);numberStack.push(5); 
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 5, 5] top \tconsecutive dups?  true:" + consecutiveDups);
		
		numberStack.clear(); numberStack.push(1);numberStack.push(2); numberStack.push(5);numberStack.push(5); numberStack.push(2);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 5, 5, 2] top \tconsecutive dups?  true:" + consecutiveDups);
		
		numberStack.clear(); numberStack.push(1);numberStack.push(2); numberStack.push(5);numberStack.push(5); numberStack.push(2); numberStack.push(1);
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 5, 5, 2, 1] top \tconsecutive dups?  true:" + consecutiveDups);
		
		// *********************** test with a different data type- Strings
		ArrayStack<String> wordStack = new ArrayStack<String>();
		wordStack.push(new String("hi")); wordStack.push(new String("hi"));
		consecutiveDups = wordStack.hasConsecutiveDuplicates();
		System.out.println("bottom [\"hi\", \"hi\"] top \tconsecutive dups?  true:" + consecutiveDups);
				
		// *********************** check that the method didn't alter the stack
		System.out.println("Top element is 1: " + numberStack.peek());
		numberStack.pop(); System.out.println("Top element is 2: " + numberStack.peek());
		numberStack.pop(); System.out.println("Top element is 5: " + numberStack.peek());
		numberStack.pop(); System.out.println("Top element is 5: " + numberStack.peek());
		numberStack.pop(); System.out.println("Top element is 2: " + numberStack.peek());
		numberStack.pop(); System.out.println("Top element is 1: " + numberStack.peek());
		numberStack.pop(); System.out.println("Stack is now empty? true: " + numberStack.isEmpty());
			
		// *********************** check for crashes when you have a full behind-the-scenes "stack" array
		numberStack.clear();
		numberStack = new ArrayStack<>(4); 
		numberStack.push(1);numberStack.push(2); numberStack.push(5);numberStack.push(2); 
		consecutiveDups = numberStack.hasConsecutiveDuplicates();
		System.out.println("bottom [1, 2, 5, 2] top \tconsecutive dups?  false:" + consecutiveDups);

	}
	
	
	
	
}
