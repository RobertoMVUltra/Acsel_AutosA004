'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameCertificados = javaMain.JavaInternalFrame("tagname:=:: Certificados Ver.*")

Set jtxtNumero = frameCertificados.JavaEdit("tagname:=VTextField", "index:=7")
Set jtxtDescripcion = frameCertificados.JavaEdit("tagname:=VTextField", "index:=8")
Set jtxtTitular = frameCertificados.JavaEdit("tagname:=VTextField", "index:=12")
Set jtxtOficinaSuscripcion = frameCertificados.JavaEdit("tagname:=VTextField", "index:=14")
Set jtxtOficinaEmisora = frameCertificados.JavaEdit("tagname:=VTextField", "index:=18")
Set jtxtPlan = frameCertificados.JavaEdit("tagname:=VTextField", "index:=29")

Set frameListaDePlanesDelProducto = javaMain.JavaInternalFrame("tagname:=Lista de Planes del Producto")
Set jtxtBuscarListaDePlanesDelProducto = frameListaDePlanesDelProducto.JavaEdit("tagname:=Buscar")
Set jbtnBuscarListaDePlanesDelProducto = frameListaDePlanesDelProducto.JavaButton("tagname:=Buscar")
Set jcmbBuscarListaDePlanesDelProducto = frameListaDePlanesDelProducto.JavaList("tagname:=Buscar")
Set jbtnAceptarListaDePlanesDelProducto = frameListaDePlanesDelProducto.JavaButton("tagname:=Aceptar")

Set jtxtRamo = frameCertificados.JavaEdit("tagname:=VTextField", "index:=35")
Set frameListaDeRamos = javaMain.JavaInternalFrame("tagname:=Lista de Ramos")
'Set jtxtBuscarListaDeRamos = frameListaDeRamos.JavaEdit("tagname:=Buscar")
'Set jbtnBuscarListaDeRamos = frameListaDeRamos.JavaButton("tagname:=Buscar")
Set jcmbBuscarListaDeRamos = frameListaDeRamos.JavaList("tagname:=Buscar")
Set jbtnAceptarListaDeRamos = frameListaDeRamos.JavaButton("tagname:=Aceptar")

Set jtxtDescripcionRamo = frameCertificados.JavaEdit("tagname:=VTextField", "index:=38")

Set frameDatosParticularesDelVehiculo = javaMain.JavaInternalFrame("tagname:=::: Datos Particulares del Vehiculo.*")

'Set jtabTabs = frameListaDePolizas.JavaTab("tagname:=TabBar")
'jtxtOficinaEmisora.Highlight
'For Iterator = 0 To 63 Step 1
'	Set jtxtCliente = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtCliente.Highlight
'Next
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strNumero = DataTable.Value("NUMERO")
strDescripcion = DataTable.Value("DESCRIPCION")
strBuscarListaDePlanDelProducto = DataTable.Value("BUSCAR_LISTA_DE_PLAN_DEL_PRODUCTO")
strListaDePlanDelProducto = DataTable.Value("LISTA_DE_PLAN_DEL_PRODUCTO")
strListaDeRamos = DataTable.Value("LISTA_DE_RAMO")
intTiempoEspera = Cint(10)
'strParamTipoCliente = Parameter("TIPO_DE_CLIENTE")
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Certificados
wait 4
fnClickOnjToolBar oToolBar.CREAR_REGISTRO
jtxtNumero.Set strNumero
jtxtDescripcion.Set strDescripcion
jtxtTitular.Type strTab
wait 2
jtxtOficinaSuscripcion.Type strTab
wait 2
jtxtOficinaEmisora.Type strTab
jtxtOficinaEmisora.Type strTab
jtxtPlan.Type strCtrL
jtxtBuscarListaDePlanesDelProducto.Set strBuscarListaDePlanDelProducto
jbtnBuscarListaDePlanesDelProducto.Click
jcmbBuscarListaDePlanesDelProducto.Select strListaDePlanDelProducto
jbtnAceptarListaDePlanesDelProducto.Click
jtxtRamo.Type strCtrL
jcmbBuscarListaDeRamos.Select strListaDeRamos
jbtnAceptarListaDeRamos.Click
jtxtDescripcionRamo.Type strTab
fnValidateAnObjctExist frameDatosParticularesDelVehiculo, intTiempoEspera
