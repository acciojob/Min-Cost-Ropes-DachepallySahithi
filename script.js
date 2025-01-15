function mincost(arr){ 
//write your code here
// return the min cost
  if(arr.length <= 1){
	  return 0;
  }
	const minHeap = new HashMap();
	for(const rope of arr){
		minHeap.insert(rope);
	}
	let totalCost=0;

	while(minHeap.size() > 1){
		const rope1 = minHeap.extractMin();
		const rope2 = minHeap.extractMin();
		totalCost += rope1+rope2;
		minHeap.insert(rope1+rope2);
	}
	return totalCost;
	}
class MinHeap {
	constructor() {
		this.heap=[];
	}
	size(){
		return this.heap.length;
	}
	insert(value){
		this.heap.push(value);
		this.bubbleUp(this.heap.length - 1);
	}
	extractMin(){
		if(this.heap.length === 0){
			return null;
		}
		const min = this.heap[0];
	    this.heap[0] = this.heap[this.heap.length - 1];
	    this.heap.pop();
	    this.heapifyDown(0);

	    return min;
	}
	bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
	heapifyDown(index) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
}
}
module.exports=mincost;