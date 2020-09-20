
public class Box<T> {

	private T thing;
	private int thingCount;

	public Box(T firstThing) {
		this.thing = firstThing;
		this.thingCount = 1;
	}

	public T getContents() {
		return thing;
	}
	public int getCount() {
		return thingCount;
	}

	public void replaceContents(T newThing) {
		this.thing = newThing;
		thingCount++;
	}

	public boolean contains(T something) {
		if(this.thing.equals(something)) {
			return true;
		} else {
			return false;
		}
	}

	public replaceIfDifferent(Object newthing) {
		if(!this.thing.equals(newthing)) {
			this.replaceContents(newThing);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public String toString() {
		return thing.toString() + " (item " + thingCount + ")";
	}

	@Override
	public boolean equals(Object other) {
		if(other instanceof Box<?>) {
			Box<?> otherBoxR = (Box<?>) other;

			boolean sameThing = this.thing.equals(otherBoxR.thing);
			boolean sameCount = this.thingCount==otherBoxR.thingCount;

			return sameThing && sameCount;

		} else {
			return false;
		}
	}

}
