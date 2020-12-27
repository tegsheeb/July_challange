import java.time.LocalDate;

public class VoterHashTableSeparateChaining {

	private Node<Voter>[] hashTable;
	private int tableSize;

	public VoterHashTableSeparateChaining(int size) {
		hashTable = (Node<Voter>[]) new Node[size];
		tableSize = size;
	}
	
	public int getHashTableLocation(int voterID) {
		return voterID % tableSize;
	}

	public boolean addVoter(Voter voterToAdd) {
		int location = getHashTableLocation(voterToAdd.getId());
		Node<Voter> newVoter = new Node(voterToAdd);
		
		if (hashTable[location] == null) {
			hashTable[location] = newVoter;
			return true;
		} else {
			Node<Voter> currentVoter = hashTable[location];
			// completing extra credit here 
			boolean duplicate = false;
			while(currentVoter.next != null && !duplicate ) {
				if (currentVoter.data.getId() == newVoter.data.getId()){
					duplicate = true;
				} else {
					currentVoter = currentVoter.next;
				}
			}

			if (duplicate) {
				return false;
			} else {
				currentVoter.next = newVoter;
				return true;
			}
		}
	}

	public Voter getVoter(int voterID) {
		int location = getHashTableLocation(voterID);
		if (hashTable[location] != null ) {
			Node<Voter> currentVoter = hashTable[location];
			boolean found = false;
			Voter foundVoter = null;
			while(currentVoter != null && !found) {
				if (currentVoter.data.getId() == voterID) {
					found = true;
					foundVoter = currentVoter.data;
				} else {
					currentVoter = currentVoter.next;
				}
			}
			return foundVoter;
		} else {
			return null;
		}
	}

	public void printTable() {
		for (int i = 0; i < tableSize; i++) {
			if (hashTable[i] != null) {
				System.out.print("Location " + i + ": ");
				Node<Voter> current = hashTable[i];
				while (current != null && current.next != null) {
					System.out.print(current.data.getName() + " -> ");
					current = current.next;
				}
				System.out.println(current.data.getName());
			}
		}
	}

}
