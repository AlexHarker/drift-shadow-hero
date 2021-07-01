
outlets = 3;

function time(regularity, base, variation, lmul, lsprob)
{
	var lo = 1 / (1 + variation);
	var hi = 1 * (1 + variation);
	
	var complexity = Math.round(Math.pow(27, regularity));
	var range = hi - lo;
	var r = Math.random() * range;
	var rq = Math.round(complexity * (lo + r)) / complexity;
	
	if (!rq)
		rq = 1;
	
	var reg = Math.pow(0.15 + (regularity * 0.95), 1.08);
	var t = rq - reg * (rq - (lo + r));

	if (Math.random() < lsprob)
		t *= lmul;
	
	outlet(0, base * t);
	outlet(1, reg);
	outlet(2, complexity);
}
