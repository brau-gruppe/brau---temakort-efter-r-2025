ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1378781.177556, 7476732.935585, 1408737.949136, 7496177.238747]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_LokalplanHvidovrerigtig_2 = new ol.format.GeoJSON();
var features_LokalplanHvidovrerigtig_2 = format_LokalplanHvidovrerigtig_2.readFeatures(json_LokalplanHvidovrerigtig_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanHvidovrerigtig_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanHvidovrerigtig_2.addFeatures(features_LokalplanHvidovrerigtig_2);
var lyr_LokalplanHvidovrerigtig_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanHvidovrerigtig_2, 
                style: style_LokalplanHvidovrerigtig_2,
                popuplayertitle: 'Lokalplan Hvidovre (rigtig)',
                interactive: true,
    title: 'Lokalplan Hvidovre (rigtig)<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_0.png" /> <br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_1.png" /> 001<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_2.png" /> 101-1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_3.png" /> 102<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_4.png" /> 103<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_5.png" /> 104<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_6.png" /> 105<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_7.png" /> 106<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_8.png" /> 108<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_9.png" /> 109-1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_10.png" /> 112<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_11.png" /> 115<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_12.png" /> 116<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_13.png" /> 118<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_14.png" /> 119<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_15.png" /> 120<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_16.png" /> 121<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_17.png" /> 122<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_18.png" /> 124<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_19.png" /> 126<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_20.png" /> 127<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_21.png" /> 128<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_22.png" /> 131<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_23.png" /> 132<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_24.png" /> 133<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_25.png" /> 134<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_26.png" /> 135<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_27.png" /> 137<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_28.png" /> 139<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_29.png" /> 140<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_30.png" /> 141<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_31.png" /> 142<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_32.png" /> 143<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_33.png" /> 144<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_34.png" /> 147<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_35.png" /> 148<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_36.png" /> 149<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_37.png" /> 150<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_38.png" /> 151<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_39.png" /> 152<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_40.png" /> 154<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_41.png" /> 202<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_42.png" /> 203<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_43.png" /> 206<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_44.png" /> 207<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_45.png" /> 208<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_46.png" /> 209<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_47.png" /> 210<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_48.png" /> 211<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_49.png" /> 216<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_50.png" /> 220<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_51.png" /> 221<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_52.png" /> 225<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_53.png" /> 226<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_54.png" /> 228<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_55.png" /> 229<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_56.png" /> 230<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_57.png" /> 231<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_58.png" /> 232<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_59.png" /> 233<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_60.png" /> 234<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_61.png" /> 236<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_62.png" /> 237<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_63.png" /> 238<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_64.png" /> 239<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_65.png" /> 240<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_66.png" /> 241<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_67.png" /> 301-1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_68.png" /> 303<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_69.png" /> 304<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_70.png" /> 305<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_71.png" /> 306<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_72.png" /> 313<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_73.png" /> 314<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_74.png" /> 316<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_75.png" /> 322<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_76.png" /> 323<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_77.png" /> 324<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_78.png" /> 325<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_79.png" /> 326<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_80.png" /> 327<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_81.png" /> 328<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_82.png" /> 329<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_83.png" /> 330<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_84.png" /> 331<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_85.png" /> 332<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_86.png" /> 335<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_87.png" /> 338<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_88.png" /> 339<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_89.png" /> 340<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_90.png" /> 341<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_91.png" /> 342<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_92.png" /> 343<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_93.png" /> 345<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_94.png" /> 403-1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_95.png" /> 404<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_96.png" /> 405<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_97.png" /> 407<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_98.png" /> 408<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_99.png" /> 409<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_100.png" /> 411<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_101.png" /> 412<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_102.png" /> 418<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_103.png" /> 423<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_104.png" /> 429<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_105.png" /> 432<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_106.png" /> 433<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_107.png" /> 440<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_108.png" /> 441<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_109.png" /> 447<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_110.png" /> 448<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_111.png" /> 452<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_112.png" /> 454<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_113.png" /> 455<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_114.png" /> 456<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_115.png" /> 457<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_116.png" /> 458<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_117.png" /> 459<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_118.png" /> 462<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_119.png" /> 463<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_120.png" /> 464<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_121.png" /> 466<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_122.png" /> 467<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_123.png" /> 468<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_124.png" /> 469<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_125.png" /> 470<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_126.png" /> 471<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_127.png" /> 472<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_128.png" /> 473<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_129.png" /> 475<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_130.png" /> 476<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_131.png" /> 504<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_132.png" /> 507<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_133.png" /> 508<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_134.png" /> 510<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_135.png" /> 511<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_136.png" /> 516<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_137.png" /> 518<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_138.png" /> 519<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_139.png" /> A1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_140.png" /> A10<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_141.png" /> A11<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_142.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_143.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_144.png" /> A13<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_145.png" /> A14<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_146.png" /> A15<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_147.png" /> A3<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_148.png" /> A5<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_149.png" /> A7<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_150.png" /> A8<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_151.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_152.png" /> B17<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_153.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_154.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_155.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_156.png" /> H10<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_157.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_158.png" /> H11<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_159.png" /> H12<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_160.png" /> H13<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_161.png" /> H14<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_162.png" /> H15<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_163.png" /> H16<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_164.png" /> H17<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_165.png" /> H18<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_166.png" /> H20<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_167.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_168.png" /> H3<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_169.png" /> H4<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_170.png" /> H5<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_171.png" /> H9<br />\
    <img src="styles/legend/LokalplanHvidovrerigtig_2_172.png" /> Lokalplan 127 med Tillæg nr. 1<br />' });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_3.png" /> Fredede områder'
            });
var format_Frededeomrder_4 = new ol.format.GeoJSON();
var features_Frededeomrder_4 = format_Frededeomrder_4.readFeatures(json_Frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_4.addFeatures(features_Frededeomrder_4);
var lyr_Frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_4, 
                style: style_Frededeomrder_4,
                popuplayertitle: 'Frededeområder',
                interactive: false,
    title: 'Frededeområder<br />\
    <img src="styles/legend/Frededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_4_5.png" /> <br />' });
var format_Strandbeskyttelse_5 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_5 = format_Strandbeskyttelse_5.readFeatures(json_Strandbeskyttelse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_5.addFeatures(features_Strandbeskyttelse_5);
var lyr_Strandbeskyttelse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_5, 
                style: style_Strandbeskyttelse_5,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_5.png" /> Strandbeskyttelse'
            });
var format_Dagligvarebutikker_6 = new ol.format.GeoJSON();
var features_Dagligvarebutikker_6 = format_Dagligvarebutikker_6.readFeatures(json_Dagligvarebutikker_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dagligvarebutikker_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagligvarebutikker_6.addFeatures(features_Dagligvarebutikker_6);
var lyr_Dagligvarebutikker_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dagligvarebutikker_6, 
                style: style_Dagligvarebutikker_6,
                popuplayertitle: 'Dagligvarebutikker',
                interactive: true,
                title: '<img src="styles/legend/Dagligvarebutikker_6.png" /> Dagligvarebutikker'
            });
var format_Valgsteder_7 = new ol.format.GeoJSON();
var features_Valgsteder_7 = format_Valgsteder_7.readFeatures(json_Valgsteder_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valgsteder_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valgsteder_7.addFeatures(features_Valgsteder_7);
var lyr_Valgsteder_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valgsteder_7, 
                style: style_Valgsteder_7,
                popuplayertitle: 'Valgsteder',
                interactive: true,
                title: '<img src="styles/legend/Valgsteder_7.png" /> Valgsteder'
            });
var format_McDonals_8 = new ol.format.GeoJSON();
var features_McDonals_8 = format_McDonals_8.readFeatures(json_McDonals_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDonals_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDonals_8.addFeatures(features_McDonals_8);
var lyr_McDonals_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_McDonals_8, 
                style: style_McDonals_8,
                popuplayertitle: 'McDonals',
                interactive: true,
                title: '<img src="styles/legend/McDonals_8.png" /> McDonals'
            });
var format_Cykelbutiksmed_9 = new ol.format.GeoJSON();
var features_Cykelbutiksmed_9 = format_Cykelbutiksmed_9.readFeatures(json_Cykelbutiksmed_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cykelbutiksmed_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cykelbutiksmed_9.addFeatures(features_Cykelbutiksmed_9);
var lyr_Cykelbutiksmed_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cykelbutiksmed_9, 
                style: style_Cykelbutiksmed_9,
                popuplayertitle: 'Cykelbutik & smed ',
                interactive: true,
                title: '<img src="styles/legend/Cykelbutiksmed_9.png" /> Cykelbutik & smed '
            });
var format_Fodboldklubber_10 = new ol.format.GeoJSON();
var features_Fodboldklubber_10 = format_Fodboldklubber_10.readFeatures(json_Fodboldklubber_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldklubber_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldklubber_10.addFeatures(features_Fodboldklubber_10);
var lyr_Fodboldklubber_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldklubber_10, 
                style: style_Fodboldklubber_10,
                popuplayertitle: 'Fodboldklubber',
                interactive: true,
                title: '<img src="styles/legend/Fodboldklubber_10.png" /> Fodboldklubber'
            });
var format_Pizzaria_11 = new ol.format.GeoJSON();
var features_Pizzaria_11 = format_Pizzaria_11.readFeatures(json_Pizzaria_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzaria_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzaria_11.addFeatures(features_Pizzaria_11);
var lyr_Pizzaria_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzaria_11, 
                style: style_Pizzaria_11,
                popuplayertitle: 'Pizzaria',
                interactive: true,
                title: '<img src="styles/legend/Pizzaria_11.png" /> Pizzaria'
            });
var format_Bibliotek_12 = new ol.format.GeoJSON();
var features_Bibliotek_12 = format_Bibliotek_12.readFeatures(json_Bibliotek_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotek_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotek_12.addFeatures(features_Bibliotek_12);
var lyr_Bibliotek_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bibliotek_12, 
                style: style_Bibliotek_12,
                popuplayertitle: 'Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/Bibliotek_12.png" /> Bibliotek'
            });
var format_Folkeskoler_13 = new ol.format.GeoJSON();
var features_Folkeskoler_13 = format_Folkeskoler_13.readFeatures(json_Folkeskoler_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_13.addFeatures(features_Folkeskoler_13);
var lyr_Folkeskoler_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_13, 
                style: style_Folkeskoler_13,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_13.png" /> Folkeskoler'
            });
var format_Tandlger_14 = new ol.format.GeoJSON();
var features_Tandlger_14 = format_Tandlger_14.readFeatures(json_Tandlger_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tandlger_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tandlger_14.addFeatures(features_Tandlger_14);
var lyr_Tandlger_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tandlger_14, 
                style: style_Tandlger_14,
                popuplayertitle: 'Tandlæger',
                interactive: true,
                title: '<img src="styles/legend/Tandlger_14.png" /> Tandlæger'
            });
var format_Togstationer_15 = new ol.format.GeoJSON();
var features_Togstationer_15 = format_Togstationer_15.readFeatures(json_Togstationer_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_15.addFeatures(features_Togstationer_15);
var lyr_Togstationer_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_15, 
                style: style_Togstationer_15,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_15.png" /> Togstationer'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_LokalplanHvidovrerigtig_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_Frededeomrder_4.setVisible(true);lyr_Strandbeskyttelse_5.setVisible(true);lyr_Dagligvarebutikker_6.setVisible(true);lyr_Valgsteder_7.setVisible(true);lyr_McDonals_8.setVisible(true);lyr_Cykelbutiksmed_9.setVisible(true);lyr_Fodboldklubber_10.setVisible(true);lyr_Pizzaria_11.setVisible(true);lyr_Bibliotek_12.setVisible(true);lyr_Folkeskoler_13.setVisible(true);lyr_Tandlger_14.setVisible(true);lyr_Togstationer_15.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Kommuneplan_1,lyr_LokalplanHvidovrerigtig_2,lyr_Frededeomrder_3,lyr_Frededeomrder_4,lyr_Strandbeskyttelse_5,lyr_Dagligvarebutikker_6,lyr_Valgsteder_7,lyr_McDonals_8,lyr_Cykelbutiksmed_9,lyr_Fodboldklubber_10,lyr_Pizzaria_11,lyr_Bibliotek_12,lyr_Folkeskoler_13,lyr_Tandlger_14,lyr_Togstationer_15];
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_LokalplanHvidovrerigtig_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Frededeomrder_3.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Strandbeskyttelse_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Dagligvarebutikker_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Valgsteder_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', });
lyr_McDonals_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cykelbutiksmed_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fodboldklubber_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Pizzaria_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bibliotek_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_13.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Tandlger_14.set('fieldAliases', {'Tandlægek': 'Tandlægek', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_LokalplanHvidovrerigtig_2.set('fieldImages', {'fid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Strandbeskyttelse_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Dagligvarebutikker_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Valgsteder_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Hjemmeside': 'TextEdit', });
lyr_McDonals_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Cykelbutiksmed_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Fodboldklubber_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Pizzaria_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Bibliotek_12.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_13.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Tandlger_14.set('fieldImages', {'Tandlægek': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_15.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kommuneplan_1.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_LokalplanHvidovrerigtig_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Frededeomrder_3.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Strandbeskyttelse_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Dagligvarebutikker_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Valgsteder_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Hjemmeside': 'no label', });
lyr_McDonals_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Cykelbutiksmed_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Fodboldklubber_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Pizzaria_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Bibliotek_12.set('fieldLabels', {'Name': 'no label', });
lyr_Folkeskoler_13.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Tandlger_14.set('fieldLabels', {'Tandlægek': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Togstationer_15.set('fieldLabels', {'Name': 'no label', });
lyr_Togstationer_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});