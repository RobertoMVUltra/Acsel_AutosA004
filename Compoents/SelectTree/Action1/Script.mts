'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x11g v2")
wait 2
Set jTree = frameAcsel.JavaTree("tagname:=DTree")

Set frameConsutDePolizas = javaMain.JavaInternalFrame("tagname:=Consulta de Polizas")
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strMenuTree = DataTable.Value("MENU_TREE")
strSubmenuTree = DataTable.Value("SUBMENU_TREE")
intTiempoEspera = 10
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
wait 5
jTree.Select strMenuTree
jTree.Type micReturn
jTree.Select strSubmenuTree
jTree.Type micReturn

fnValidateAnObjctExist frameConsutDePolizas, intTiempoEspera
