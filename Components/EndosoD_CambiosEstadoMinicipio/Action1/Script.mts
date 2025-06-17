	''''''''''''''''''''''''''''''''''''''''''''''''Repositorio de Objetos''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameListaPolizas=javaMain.JavaInternalFrame("tagname:=:: Lista de Polizas.*")
Set frameCertificados=javaMain.JavaInternalFrame("tagname:=:: Certificados.*")
Set jtabTabsListaPolizasSubMenu=frameListaPolizas.JavaTab("tagname:=TabBar")
Set jtabTabsCertificadoSubMenu=frameCertificados.JavaTab("tagname:=TabBar")
Set jbtnDatosParticulares=frameCertificados.JavaButton("tagname:=Datos Partic.")
Set frameDatosParticulares=javaMain.JavaInternalFrame("tagname:=::: Datos Particulares del Vehiculo.*")
Set jbtnCambiarEstadoMunicipio=frameDatosParticulares.JavaButton("tagname:=VButton", "index:=4")
Set frameEndosoCambioEdoMcpio=javaMain.JavaInternalFrame("tagname:=::: Endoso: Cambio de Edo/Mcpio.*")
Set jtxtEstado=frameEndosoCambioEdoMcpio.JavaEdit("tagname:=VTextField", "index:=4")
Set frameListaEstados=javaMain.JavaInternalFrame("tagname:=Lista de Estados.*")
Set jtxtListaEstadoBuscar=frameListaEstados.JavaEdit("tagname:=Buscar")
Set jbtnListaEstadoBuscar=frameListaEstados.JavaButton("tagname:=Buscar")
Set jcmbListaEstadoBuscar=frameListaEstados.JavaList("tagname:=Buscar")
Set jbtnListaEstadoAceptar=frameListaEstados.JavaButton("tagname:=Aceptar")
Set jtxtMunicipioDeleg=frameEndosoCambioEdoMcpio.JavaEdit("tagname:=VTextField", "index:=5")
Set frameListaMunicipio=javaMain.JavaInternalFrame("tagname:=Lista de Municipios.*")
Set jtxtListaMunicipioBuscar=frameListaMunicipio.JavaEdit("tagname:=Buscar")
Set jbtnListaMunicipioBuscar=frameListaMunicipio.JavaButton("tagname:=Buscar")
Set jcmbListaMunicipioBuscar=frameListaMunicipio.JavaList("tagname:=Buscar")
Set jbtnListaMunicipioAceptar=frameListaMunicipio.JavaButton("tagname:=Aceptar")
Set jbtnProcesar=frameEndosoCambioEdoMcpio.JavaButton("tagname:=Procesar")
Set frameAcsel=javaMain.JavaInternalFrame("tagname:=Acsel/x .*")
Set jbtnOK=frameAcsel.JavaButton("tagname:=Ok")
Set frameEndososPoliza=javaMain.JavaInternalFrame("tagname:=Endosos de Póliza.*")
Set jCheckBoxEndoso=frameEndososPoliza.JavaCheckBox("tagname:=LWCheckbox", "index:=2")
'For Iterator = 1 To 20 step 1
'	Set jtxtEstado=frameEndosoCambioEdoMcpio.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'       jtxtEstado.Highlight
'       wait 2
'Next

Set jbtnActualizar = frameListaPolizas.JavaButton("tagname:=VButton", "index:=0")
Set frameNumeroDeTramiteBizflow = javaMain.JavaInternalFrame("tagname:=Numero de Tramite BIZFLOW")
Set jbtnAceptarNumetroDeTramiteBizFlow = frameNumeroDeTramiteBizflow.JavaButton("tagname:=Aceptar")
Set frameActualizacionTemporal = javaMain.JavaInternalFrame("tagname:=Actualizacion Temporal")
Set jbtnCambiarEstatusPoliza=frameActualizacionTemporal.JavaButton("tagname:=VButton", "index:=0")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x.*")
Set jbtnCambiarEstatusPoliza2=frameAcsel.JavaButton("tagname:=Si")
Set frameOperacionesPoliza = javaMain.JavaInternalFrame("tagname:=Operaciones de la Poliza.*")
Set jbtnActualizarOperacion=frameOperacionesPoliza.JavaButton("tagname:=VButton", "index:=0")
Set jbtnImprimirEndosoNo=frameAcsel.JavaButton("tagname:=No")


'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strSubMenuCertificados="Certificados"
strSubMenuRamos="Ramos"
strSubMenuModificacion="Modificación"
intTiempoEspera=15
strCodigoEstado=DataTable.Value("LISTA_CODIGO_ESTADOS")
strCodEstado=DataTable.Value("COD_ESTADO")
strCodigoMunicipio=DataTable.Value("LISTA_CODIGO_MUNICIPIO")
strCodMunicipio=DataTable.Value("COD_MINICIPIO")

'''''''''''''''''''''''''''''''''''Flujo'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

jtabTabsListaPolizasSubMenu.Select strSubMenuCertificados
jtabTabsCertificadoSubMenu.Select strSubMenuRamos
jbtnDatosParticulares.Click
jbtnCambiarEstadoMunicipio.Click
jtxtEstado.Type strCtrL
jtxtListaEstadoBuscar.Set strCodigoEstado
jbtnListaEstadoBuscar.Click
jcmbListaEstadoBuscar.Select strCodEstado
jbtnListaEstadoAceptar.Click
jtxtMunicipioDeleg.Type strCtrL
jtxtListaMunicipioBuscar.Set strCodigoMunicipio
jbtnListaMunicipioBuscar.Click
jcmbListaMunicipioBuscar.Select strCodMunicipio
jbtnListaMunicipioAceptar.Click
jbtnProcesar.Click
jbtnOK.Click
fnValidateAnObjctExist frameEndosoCambioEdoMcpio, intTiempoEspera
fnClickOnjToolBar oToolBar.SALVAR
jCheckBoxEndoso.Click 1,1
fnClickOnjToolBar oToolBar.SALVAR
fnClickOnjToolBar oToolBar.SALIR
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist frameCertificados, intTiempoEspera
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist jbtnActualizar, intTiempoEspera

jbtnActualizar.Click
jbtnAceptarNumetroDeTramiteBizFlow.Click
fnValidateAnObjctExist jbtnCambiarEstatusPoliza, intTiempoEspera
jbtnCambiarEstatusPoliza.Click
jbtnCambiarEstatusPoliza2.Click
jbtnActualizarOperacion.Click
jbtnImprimirEndosoNo.Click
fnValidateAnObjctExist frameListaPolizas, intTiempoEspera

objBrowserAcsel.Highlight
fnPressCtrlF4()
objBrowserAcsel.CloseAllTabs()
