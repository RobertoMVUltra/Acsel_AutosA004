'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x11g v2")
wait 2
Set jTree = frameAcsel.JavaTree("tagname:=DTree")

Set frameConsutDePolizas = javaMain.JavaInternalFrame("tagname:=Consulta de Polizas")
Set frameCobranza=javaMain.JavaInternalFrame("tagname:=Cobranza.*")
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strMenuTree = DataTable.Value("MENU_TREE")
strSubmenuTree = DataTable.Value("SUBMENU_TREE")
strSubmanu2Tree=Datatable.Value("SUBMANU2_TREE")
intTiempoEspera = 10
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
wait 5
'jTree.Select strMenuTree
'jTree.Type micReturn
'jTree.Select strSubmenuTree
'jTree.Type micReturn

Select Case strMenuTree
	Case "Acsel;Suscripcion"
		jTree.Select strMenuTree
		jTree.Type micReturn
		jTree.Select strSubmenuTree
		jTree.Type micReturn
		
		fnValidateAnObjctExist frameConsutDePolizas, intTiempoEspera
	Case "Acsel;Area Administrativa y Financiera"
		jTree.Select strMenuTree
		jTree.Type micReturn
		jTree.Select strSubmenuTree
		jTree.Type micReturn
		jTree.Select strSubmanu2Tree
		jTree.Type micReturn
		
		fnValidateAnObjctExist	frameCobranza,intTiempoEspera
End Select

