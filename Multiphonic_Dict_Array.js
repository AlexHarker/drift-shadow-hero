function doString(output, key, str)
{
	var temp = new Dict();
	var items = str.split('_');
			
	temp.set("section", items[0]);
	temp.set("subsection", items[1]);
	temp.set("item", parseInt(items[2].substring(1), 10)); 
	
	output.append(key, temp);
	
} doString.local = 1; //private


function bang()
{
	
	var flat = new Dict("__ob_multi_to_sections_flat");
	var output = new Dict("__ob_multi_to_sections");

	output.clear();
	
	var keys = flat.getkeys();
	
	for (var i = 0; i < keys.length; i++)
	{
		var key = keys[i];
		var mapped = flat.get(key);

		if (typeof mapped == 'string')
		{
			var dict = doString(output, key, mapped);
		}
		else
		{			
			for (var j = 0; j < mapped.length; j++)
				doString(output, key, mapped[j])
	
		}
	}
}
