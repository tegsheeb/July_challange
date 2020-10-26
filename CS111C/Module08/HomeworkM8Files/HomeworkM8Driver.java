import java.text.NumberFormat;

@SuppressWarnings({"rawtypes", "unchecked"})
public class HomeworkM8Driver {

	public static void main(String[] args) {
		NumberFormat formatter = NumberFormat.getPercentInstance();
		
		System.out.println("*********************Array Sortedness Tester");
		Integer[] array1 = {1, 2, 3, 3, 5};
		Integer[] array2 = {1, 2, 3, 4, 5, 5};
		Integer[] array3 = {10, 8, 5, 3, 1};
		Integer[] array4 = {12, 11, 9, 3, 2, 1};
		Integer[] array5 = {2, 8, 3, 9, 6};
		Integer[] array6 = {7, 1, 6, 8, 5, 2};
		String[] array7 = {"abc", "def", "ghi"};
		String[] array8 = {"cat", "apple", "dog", "elephant"};
		String[] array9 = {"blue"};
		String[] array10 = {};
		
		System.out.println("Sortedness: Odd Length\t\tSorted\t\t100% \t" + formatter.format(sortedness(array1)));
		System.out.println("Sortedness: Even Length\t\tSorted\t\t100% \t" + formatter.format(sortedness(array2)));
		System.out.println("Sortedness: Odd Length\t\tUnsorted\t0% \t" + formatter.format(sortedness(array3)));
		System.out.println("Sortedness: Even Length\t\tUnsorted\t0% \t" + formatter.format(sortedness(array4)));
		System.out.println("Sortedness: Odd Length\t\tPartial Sort\t50% \t" + formatter.format(sortedness(array5)));
		System.out.println("Sortedness: Even Length\t\tPartial Sort\t40% \t" + formatter.format(sortedness(array6)));	
		System.out.println("Sortedness: Strings, Odd Length\tSorted\t\t100% \t" + formatter.format(sortedness(array7)));
		System.out.println("Sortedness: Strings, Even \tPartial Sort\t67% \t" + formatter.format(sortedness(array8)));
		System.out.println("Sortedness: Singleton\t\tSorted\t\t100% \t" + formatter.format(sortedness(array9)));
		System.out.println("Sortedness: Empty\t\tSorted\t\t100% \t" + formatter.format(sortedness(array10)));
		
		System.out.println("\n*********************Node Sortedness Tester");

		// this code uses the same values as the arrays above
		Node<Comparable> chain1 = new Node<Comparable>(1, new Node<Comparable>(2, new Node<Comparable>(3,
				new Node<Comparable>(3, new Node<Comparable>(5)))));
		Node<Comparable> chain2 = new Node<Comparable>(1, new Node<Comparable>(2, new Node<Comparable>(3,
				new Node<Comparable>(4, new Node<Comparable>(5, new Node<Comparable>(5))))));
		Node<Comparable> chain3 = new Node<Comparable>(10, new Node<Comparable>(8, new Node<Comparable>(5,
				new Node<Comparable>(3, new Node<Comparable>(1)))));
		Node<Comparable> chain4 = new Node<Comparable>(12, new Node<Comparable>(11, new Node<Comparable>(9,
				new Node<Comparable>(3, new Node<Comparable>(2, new Node<Comparable>(1))))));
		Node<Comparable> chain5 = new Node<Comparable>(2, new Node<Comparable>(8, new Node<Comparable>(3,
				new Node<Comparable>(9, new Node<Comparable>(6)))));
		Node<Comparable> chain6 = new Node<Comparable>(7, new Node<Comparable>(1, new Node<Comparable>(6,
				new Node<Comparable>(8, new Node<Comparable>(5, new Node<Comparable>(2))))));
		Node<Comparable> chain7 = new Node<Comparable>("abc",
				new Node<Comparable>("def", new Node<Comparable>("ghi")));
		Node<Comparable> chain8 = new Node<Comparable>("cat",
				new Node<Comparable>("apple", new Node<Comparable>("dog", new Node<Comparable>("elephand"))));
		Node<Comparable> chain9 = new Node<Comparable>("blue");
		Node<Comparable> chain10 = null;

		System.out.println("Sortedness: Odd Length\t\tSorted\t\t100% \t" + formatter.format(sortedness(chain1)));
		System.out.println("Sortedness: Even Length\t\tSorted\t\t100% \t" + formatter.format(sortedness(chain2)));
		System.out.println("Sortedness: Odd Length\t\tUnsorted\t0% \t" + formatter.format(sortedness(chain3)));
		System.out.println("Sortedness: Even Length\t\tUnsorted\t0% \t" + formatter.format(sortedness(chain4)));
		System.out.println("Sortedness: Odd Length\t\tPartial Sort\t50% \t" + formatter.format(sortedness(chain5)));
		System.out.println("Sortedness: Even Length\t\tPartial Sort\t40% \t" + formatter.format(sortedness(chain6)));	
		System.out.println("Sortedness: Strings, Odd Length\tSorted\t\t100% \t" + formatter.format(sortedness(chain7)));
		System.out.println("Sortedness: Strings, Even \tPartial Sort\t67% \t" + formatter.format(sortedness(chain8)));
		System.out.println("Sortedness: Singleton\t\tSorted\t\t100% \t" + formatter.format(sortedness(chain9)));
		System.out.println("Sortedness: Empty\t\tSorted\t\t100% \t" + formatter.format(sortedness(chain10)));	

	}

	public static double sortedness(Comparable[] array) {
		if (array.length <= 1) {
			return 1;
		}

		double sorted = 0;
		for(int i = 0; i < array.length - 1; i++) {
			if (array[i].compareTo(array[i + 1]) <= 0) {
				sorted++;
			}
		}
		return sorted/(array.length - 1);	
	}
	
	public static double sortedness(Node<Comparable> node) {
		double sorted = 0;
		int count = 0;
		
		Node<Comparable> current = node;
		while(current != null && current.next != null) {
			if(current.data.compareTo(current.next.data) <= 0) {
				sorted ++;
			}
			count++;
			current = current.next;
		}

		if (count <= 1) {
			return 1;
		}
		return sorted/count;
	}
	
}