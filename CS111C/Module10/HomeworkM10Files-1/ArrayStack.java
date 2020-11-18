import java.util.Arrays;
import java.util.EmptyStackException;

/**
 * A class of stacks whose entries are stored in an array.
 * 
 * @author Frank M. Carrano and Timothy M. Henry
 * @version 5.0
 */
public final class ArrayStack<T> implements StackInterface<T> {
	
	private T[] stack; // Array of stack entries
	private int topIndex; // Index of top entry
	private boolean integrityOK = false;
	private static final int DEFAULT_CAPACITY = 50;
	private static final int MAX_CAPACITY = 10000;

	public ArrayStack() {
		this(DEFAULT_CAPACITY);
	} 
	
	public ArrayStack(int initialCapacity) {
		integrityOK = false;
		checkCapacity(initialCapacity);

		// The cast is safe because the new array contains null entries
		@SuppressWarnings("unchecked")
		T[] tempStack = (T[]) new Object[initialCapacity];
		stack = tempStack;
		topIndex = -1;
		integrityOK = true;
	} 

	public void push(T newEntry) {
		checkIntegrity();
		ensureCapacity();
		stack[topIndex + 1] = newEntry;
		topIndex++;
	} 

	public T peek() {
		checkIntegrity();
		if (isEmpty()) {
			throw new EmptyStackException();
		} else {
			return stack[topIndex];
		}
	}
	

	public T peekNext() {
		checkIntegrity();
		if (topIndex < 1) {
			throw new EmptyStackException();
		} else {
			return stack[topIndex - 1];
		}
	}
	

	public T pop() {
		checkIntegrity();
		if (isEmpty()) {
			throw new EmptyStackException();
		} else {
			T top = stack[topIndex];
			stack[topIndex] = null;
			topIndex--;
			return top;
		}
	} 

	public boolean isEmpty() {
		return topIndex < 0;
	} 

	public void clear() {
		checkIntegrity();

		// Remove references to the objects in the stack,
		// but do not deallocate the array
		while (topIndex > -1) {
			stack[topIndex] = null;
			topIndex--;
		} 
			// Assertion: topIndex is -1
	}

	// Throws an exception if this object is not initialized.
	private void checkIntegrity() {
		if (!integrityOK) {
			throw new SecurityException("ArrayStack object is corrupt.");
		}
	} 

	// Throws an exception if the client requests a capacity that is too large.
	private void checkCapacity(int capacity) {
		if (capacity > MAX_CAPACITY) {
			throw new IllegalStateException(
					"Attempt to create a stack " + "whose capacity exceeds " + "allowed maximum.");
		}
	} 

	// Doubles the size of the array stack if it is full
	// Precondition: checkInitialization has been called.
	private void ensureCapacity() {
		if (topIndex >= stack.length - 1) {// If array is full, double its size
			int newLength = 2 * stack.length;
			checkCapacity(newLength);
			stack = Arrays.copyOf(stack, newLength);
		} 
	}
}
