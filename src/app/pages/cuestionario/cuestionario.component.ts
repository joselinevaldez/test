import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
seccion2:any=[
  {pregunta:"Imágenes que muestran desnudos",radio:"radio1"},
  {pregunta:"Imágenes de actos sexuales ",radio:"radio2"},
  {pregunta:"Historias (texto) que describen encuentros sexuales con gran detalle",radio:"radio3"},
  {pregunta:"Películas que muestras la penetración pene-vagina",radio:"radio4"},
  {pregunta:"Películas que muestran el sexo oral",radio:"radio5"},
  {pregunta:"Películas que muestran dedo-vagina ",radio:"radio6"},
  {pregunta:"Películas que muestran la penetración pene-ano",radio:"radio7"},
  {pregunta:"Películas que participan dos hombres y una mujer en actos sexuales ",radio:"radio8"},
  {pregunta:"Películas que participan dos mujeres y un hombre en actos sexuales ",radio:"radio9"},
  {pregunta:"Películas que participan un grupo de personas en actos sexuales (orgia)",radio:"radio10"},
  {pregunta:"Películas que participan un grupo de hombres y una mujer (Gang-gang) ",radio:"radio11"},
  {pregunta:"Películas que representan  una fantasía (porrista, maestra, etc.)",radio:"radio12"},
  {pregunta:"Películas que representan la esclavitud",radio:"radio13"},
  {pregunta:"Películas que muestran que muestran a un hombre eyacular en la cara o en el cuerpo de su pareja",radio:"radio14"},
  {pregunta:"Películas que representan a una mujer  actuando en el papel de dominatriz (mujer que domina sexualmente a su pareja)",radio:"radio15"},
  {pregunta:"Películas que representan fetiches sexuales (pieles, plumas, los pies)",radio:"radio16"},
  {pregunta:"Películas que muestran imágenes soft-core (besarse mientras están vestidos, desnudo mínimo)",radio:"radio17"},
  {pregunta:"Películas que participa una mujer en el papel de sumisión (ser dominada sexualmente)",radio:"radio18"},
  {pregunta:"Películas que participa una mujer en un papel degradante (donde la mujer es humillada)" ,radio:"radio19"},
  {pregunta:"Películas que incluyen sexo violento (violación, golpes)",radio:"radio20"}
];
seccion3:any=[
  {pregunta:"Tomas ideas para tus actividades sexuales en función de lo que has consultado y/o interactuado en línea",radio:"r1"},
  {pregunta:"Has querido presionar a una mujer o a un hombre para participar en alguna actividad sexual basándote en lo que has consultado y/o interactuado en línea ",radio:"r2"},
  {pregunta:"Haz forzado a alguien a tener relaciones sexuales contigo  por haber consultado y/o interactuado con material sexual en línea",radio:"r3"},
  {pregunta:"Tu pareja ha tenido miedo durante el  contacto sexual, porque has hecho algo que aprendiste en línea",radio:"r4"},
  {pregunta:"Te  han forzado a participar en actos sexuales después de consultar y/o interactuar con material sexual en línea ",radio:"r5"},
  {pregunta:"Has visitado sitios que te permiten interactuar virtualmente con una  pareja sexual por medio de una cámara web ",radio:"r6"},
  {pregunta:"Has visitado sitios que te permiten consultar y/o interactuar, en tiempo real, a otros realizando sus a actividades diarias",radio:"r7"},
  {pregunta:"Te gusta ver en tiempo real (en vivo) a personas que practican conductas sexuales en línea ",radio:"r8"},
  ];
seccion4:any=[
    {pregunta:"Te daría vergüenza si tus seres queridos te descubren usando material sexual en línea",radio:"s1"},
    {pregunta:"El tiempo que pasas usando el material sexual en línea ha aumentado desde que los usaste por primera vez",radio:"s2"},
    {pregunta:"Te has vuelto más desinhibido desde que empezaste a mirar material sexual en línea",radio:"s3"},
    {pregunta:"Prefieres usar material sexual en línea, porque la gente no parece tan real para ti.",radio:"s4"},
    {pregunta:"Prefieres usar material sexual en línea, porque te sientes distante de la gente ",radio:"s5"},
    {pregunta:"Prefieres usar material sexual en línea, porque es anónimo y tu identidad está protegida",radio:"s6"},
    {pregunta:"Crees que mirar material sexual en línea está mal",radio:"s7"},
    {pregunta:"Crees que mirar material sexual en línea no es tan malo, como hacerlo en vivo",radio:"s8"},
    ];
seccion5:any=[
      {pregunta:"Mi gran apetito sexual ha sido un obstáculo en mis relaciones.",radio:"p1"},
      {pregunta:"Mis pensamientos y comportamientos sexuales me están causando problemas en la vida.",radio:"p2"},
      {pregunta:"Mis deseos de tener sexo  han afectado a mi vida cotidiana.",radio:"p3"},
      {pregunta:"A veces no consigo consigo cumplir con compromisos y responsabilidades a causa de mis comportamientos sexuales.",radio:"p4"},
      {pregunta:"A veces llego a ponerme tan caliente que podía perder el control.",radio:"p5"},
      {pregunta:"Me sorprendo a mí mismo pensando sobre sexo en la escuela.",radio:"p6"},
      {pregunta:"Siento que mis pensamientos y sensaciones sexuales son más fuertes que yo. ",radio:"p7"},
      {pregunta:"Tengo  que luchar para controlar  mis pensamientos y comportamientos sexuales",radio:"p8"},
      {pregunta:"Pienso en sexo más de  lo que me gustaría.",radio:"p9"},
      {pregunta:" Me ha resultado difícil encontrar parejas sexuales que desearan tener sexo tanto como yo.",radio:"p10"},
     
    ];

    constructor() { }

  ngOnInit() {
  }

}
function moveScroll(){
  var clone_table:any;
  var scroll = $(window).scrollTop();
  var anchor_top = $("#maintable").offset().top;
  var anchor_bottom = $("#bottom_anchor").offset().top;
  if (scroll>anchor_top && scroll<anchor_bottom) {
  clone_table = $("#clone");
  if(clone_table.length == 0){
      clone_table = $("#maintable").clone();
      clone_table.attr('id', 'clone');
      clone_table.css({position:'fixed',
               'pointer-events': 'none',
               top:0});
      clone_table.width($("#maintable").width());
      $("#table-container").append(clone_table);
      $("#clone").css({visibility:'hidden'});
      $("#clone thead").css({visibility:'visible'});
  }
  } else {
  $("#clone").remove();
  }
}
$(window).scroll(moveScroll);