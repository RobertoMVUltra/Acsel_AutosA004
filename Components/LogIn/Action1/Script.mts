'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
'Set objBloqueoPaginaBitdefender=Browser("Acsel 12 / Seguros Banorte").Page("Acsel 12 / Seguros Banorte").Link("He comprendido los riesgos,")
 'Set objBloqueoPaginaBitdefender= Browser("Acsel 12 / Seguros Banorte_3").Page("Acsel 12 / Seguros Banorte").Link("He comprendido los riesgos,")
' Set objBloqueoPaginaBitdefender= Browser("name:=Acsel 12 / Seguros Ba.*").Page("Acsel 12 / Seguros Banorte").Link("He comprendido los riesgos,")
Set objBrowserBit=Browser("name:=Página de alerta de Bitdefen.*")
Set objPageBit=objBrowserBit.Page("title:=Página de alerta de Bitde.*")
Set objWebTableBit=objPageBit.WebTable("name:=He comprendido los riesgos, deseo accede.*")
Set objLinkBit=objWebTableBit.Link("name:=He comprendido los riesgos, deseo acceder de todas.*")
'En ocasiones cambia la pantalla de inicio y hay que llamar el objeto de la linea 10 y 11
Set MasInformacion =Browser("Este sitio no es seguro.").Page("Este sitio no es seguro.").Link("Más información")
Set ContiniarConLaPagina=Browser("Este sitio no es seguro._2").Page("Este sitio no es seguro.").Link("Continuar a la página")
Set wbtnNoBloquear = Dialog("Advertencia de Seguridad").WinButton("No bloquear")
Set wbtnActualizarMasTarde=Window("Personal: Microsoft​ Edge").Dialog("Java Update Necesario").WinButton("Más tarde")



Set wbtnEjecutar = Window("Perfil 1: Microsoft​ Edge").JavaApplet("Main").JavaDialog("tagname:=Advertencia de Seguridad") @@ hightlight id_;_264576_;_script infofile_;_ZIP::ssf1.xml_;_

Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set objJavaWindows=objPageAcsel.JavaWindow("tagname:=PluginEmbeddedFr.*")
Set objJavaDialog=objJavaWindows.JavaDialog("tagname:=Advertencia.*")
Set jbtnAlvertenciaSeguridad1=objJavaDialog.JavaButton("tagname:=Continuar")


Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameConexion = javaMain.JavaInternalFrame("tagname:=Conexión")

Set jtxtUsuario = frameConexion.JavaEdit("tagname:=Usuario:")
Set jtxtContrasenia = frameConexion.JavaEdit("tagname:=Contraseña:")
Set jtxtBaseDeDatos = frameConexion.JavaEdit("tagname:=Base de Datos:")
Set jbtnConectar = frameConexion.JavaButton("tagname:=Conectar")

Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x11g v2")
Set jTree = frameAcsel.JavaTree("tagname:=DTree") rem UFT test Object
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strNavegador = DataTable.value("NAVEGADOR")
strUrl = DataTable.value("URL")
strUsuario = DataTable.Value("USUARIO")
strContrasenia = DataTable.Value("CONTRASENIA")
strBaseDeDatos = DataTable.Value("BASE_DE_DATOS")
intTiempoObjetoExiste = 15
intPosX = 0
intPosY = 0
'''''''''''''''''''''''''''''''Definición de nombres y criticidad de objetos'''''''''''''''''''''''''''''''''''''''''''''''
'jtxtUsuario.SetTOProperty "criticidad", "Alto"
'jtxtUsuario.SetTOProperty "ObjName", "Usuario"
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
SystemUtil.Run strNavegador, strUrl
'objBloqueoPaginaBitdefender.Click

If MasInformacion.Exist(3) Then
	MasInformacion.Click
	ContiniarConLaPagina.Click
else 
	objLinkBit.Click
End If


If wbtnActualizarMasTarde.Exist(3) Then
	wbtnActualizarMasTarde.Click
End If

jbtnAlvertenciaSeguridad1.Click
wait 7
if wbtnNoBloquear.Exist(3) then 
	wbtnNoBloquear.Click, intPosX, intPosY
end if
'wbtnEjecutar.Click, intPosX, intPosY
'objtAdvertenciaSeguridad3.Click
wait 5
fnPressEsc()

jtxtUsuario.Set strUsuario
jtxtContrasenia.Set strContrasenia
jtxtBaseDeDatos.Set strBaseDeDatos
jbtnConectar.Click
wait 3
rem validacion para el login exitoso
fnValidateAnObjctExist jTree, intTiempoObjetoExiste

