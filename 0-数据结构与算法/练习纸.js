var twoSum = function(nums, target) {
    var map = new Map();
    for(var i = 0 ; i<nums.length;i++){
        const n2 = target-nums[i];//
        if(map.has(n2)){  
            return [map.get(n2),i];
        }
        map.set(nums[i],i)
    }
};