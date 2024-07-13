'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameConsultaPolizas = javaMain.JavaInternalFrame("tagname:=Consulta de Poliza.*")
Set jtxtProducto=frameConsultaPolizas.JavaEdit("tagname:=VTextField", "index:=0")
Set jtxtPoliza=frameConsultaPolizas.JavaEdit("tagname:=VTextField", "index:=2")
Set jtxtOficina=frameConsultaPolizas.JavaEdit("tagname:=VTextField", "index:=4")
Set jbtnConsultar=frameConsultaPolizas.JavaButton("tagname:=Consultar")
Set frameListaPolizas=javaMain.JavaInternalFrame("tagname:=:: Lista de Polizas.*")
Set jtabTabsSubMenu=frameListaPolizas.JavaTab("tagname:=TabBar")
'For Iterator = 0 To 63 Step 1
'	Set jtxtProducto=frameConsultaPolizas.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtProducto.Highlight
'Next
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strProducto = DataTable.Value("PRODUCTO")
strPoliza = DataTable.Value("POLIZA")
strOficina = DataTable.Value("OFICINA")

intTiempoEspera = Cint(10)
intTiempoObjetoExiste=15
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Consultar Póliza
jtxtProducto.Set strProducto
jtxtPoliza.Set strPoliza
jtxtOficina.Set strOficina
jbtnConsultar.Click

fnValidateAnObjctExist jtabTabsSubMenu, intTiempoObjetoExiste 

'wait 4
'fnClickOnjToolBar oToolBar.CREAR_REGISTRO
'jtxtNumero.Set strNumero
'jtxtDescripcion.Set strDescripcion
'jtxtTitular.Type strTab
'wait 2
'jtxtOficinaSuscripcion.Type strTab
'wait 2
'jtxtOficinaEmisora.Type strTab
'jtxtOficinaEmisora.Type strTab
'jtxtPlan.Type strCtrL
'jtxtBuscarListaDePlanesDelProducto.Set strBuscarListaDePlanDelProducto
'jbtnBuscarListaDePlanesDelProducto.Click
'jcmbBuscarListaDePlanesDelProducto.Select strListaDePlanDelProducto
'jbtnAceptarListaDePlanesDelProducto.Click
'jtxtRamo.Type strCtrL
'jcmbBuscarListaDeRamos.Select strListaDeRamos
'jbtnAceptarListaDeRamos.Click
'jtxtDescripcionRamo.Type strTab
'fnValidateAnObjctExist frameDatosParticularesDelVehiculo, intTiempoEspera
