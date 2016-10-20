function Minmax(){
	var min;
	var max;
	var a[];
	var i=0;
	a[i]=prompt("Nhap so thu"+ (i+1));
	min=a[i];
	max=a[i];
	while(a[i]!=null){
		i++;
		a[i]=prompt("nhap so thu"+(i+1));
		{
			if(a[i]>=max){
				max=a[i];
			}
			if(a[i]<=min){
				min=a[i];
			}
		}
	}
	alert("max la :"+max+"<br>"+"Min la:"+min);
}