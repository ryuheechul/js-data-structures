function mergeSort(items) {
	if (items.length < 2) {
		return items;
	}

    	var middle = Math.floor(items.length / 2),
            left   = items.slice(0, middle),
	    right  = items.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var result  = [],
	    il      = 0,
	    ir      = 0;

	while (il < left.length && ir < right.length){
		if (left[il] < right[ir]){
			result.push(left[il++]);
		} else {
			result.push(right[ir++]);
		}
	}

	return result.concat(left.slice(il)).concat(right.slice(ir));
}

var nums = [6,10,1,9,4,8,2,7,3,5];
print(nums);
print();
nums = mergeSort(nums);
print();
print(nums);
