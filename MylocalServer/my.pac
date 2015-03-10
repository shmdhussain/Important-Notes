function FindProxyForURL(url, host) {
	var direct = "DIRECT";
	var proxy  = "PROXY 135.28.13.11:8080";
	
	if (
		dnsDomainIs(host,"portal5.stage.att.net") ||
		dnsDomainIs(host,"google.com")
		
	) 
	
	{
		return proxy;
	}
	
	if (
		dnsDomainIs(host,"10.87.136.56") ||
		(
			shExpMatch(host,":") && shExpMatch(host,":80") == false
		)
	) 
	{
		return direct;
	} 
	else {
		return proxy;
	}
}