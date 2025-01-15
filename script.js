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
}

module.exports=mincost;
