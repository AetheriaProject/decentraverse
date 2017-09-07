/**
 * @author Alonzo
 */

function resolve_to_ipfs(addr)
{
	if(addr.length == 46 && addr.substring(0, 1) == "Qm")
		return addr;
	return addr; //in future versions this would be resolved by a smart contract
}

function getscenecontents()
{
	name = _GET["scenename"];
		
	name = resolve_to_ipfs(name);
	url = "https://ipfs.io/ipfs/" + name + "/";
	

	$.get( url + "index.scene", function( data ) {
  		scene.innerHTML += data;
	});
	return url; //returned for next function element.innerHTML = data.text();
}

function parsedepends(url)
{
	children = $("a-assets").children();
	for(i=0;i<children.length;i++)
	{
		src = children[i].attr( "src" );
		if(src.substring(0, 1) == "./")
			children[i].prop('src', url + src.substring(1));
	}
}

$( document ).ready(function() {
    addr = getscenecontents();
    parsedepends(addr);
});