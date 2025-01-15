function mincost(arr){ 
//write your code here
	arr.sort((a,b) => a-b);
	let cost = 0;

	while (arr.length > 1) {
		const rope1 = arr.shift();
		const rope2 = arr.shift();
		const newRopeLength = rope1 + rope2;
		cost += newRopeLength;
		arr.push(newRopeLength);
		arr.sort((a,b) => a-b);
	}
	return cost;
}
module.exports=mincost;