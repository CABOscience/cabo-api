import { createBulk } from './utils'

// TODO mammiferes need more stuff

export default (mockData) => createBulk(mockData.db.RefSpecies, mockData,
  [{
    'vernacular_fr': 'cténuche de virginie',
    'name': 'Ctenucha virginica',
    'tsn': '188644',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria pourpré',
    'name': 'Boloria chariclea',
    'tsn': '188571',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sphinx colibri',
    'name': 'Hemaris thysbe',
    'tsn': '188633',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sphinx chèvrefeuille',
    'name': 'Hemaris diffinis',
    'tsn': '936068',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'amélanchier',
    'name': 'Amelanchier',
    'tsn': '25108',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'aulne rugueux',
    'name': 'Alnus rugosa',
    'tsn': '181888',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bouleau à papier',
    'name': 'Betula papyrifera',
    'tsn': '19489',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bouleau gris',
    'name': 'Betula populifolia',
    'tsn': '19497',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bouleau jaune',
    'name': 'Betula alleghaniensis',
    'tsn': '19481',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'caryer cordiforme',
    'name': 'Carya cordiformis',
    'tsn': '19227',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cerisier de pennsylvanie',
    'name': 'Prunus pensylvanica',
    'tsn': '24799',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cerisier de virginie',
    'name': 'Pinus virginiana',
    'tsn': '183394',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cerisier tardif',
    'name': 'Prunus serotina',
    'tsn': '24764',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chêne à gros fruits',
    'name': 'Quercus macrocarpa',
    'tsn': '19287',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chêne bicolore',
    'name': 'Quercus bicolor',
    'tsn': '19300',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chêne blanc',
    'name': 'Quercus alba',
    'tsn': '19290',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chêne rouge',
    'name': 'Quercus rubra',
    'tsn': '19408',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épinette blanche',
    'name': 'Picea glauca',
    'tsn': '183295',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épinette de norvège',
    'name': 'Picea abies',
    'tsn': '183289',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épinette noire',
    'name': 'Picea mariana',
    'tsn': '183302',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épinette rouge',
    'name': 'Picea rubens',
    'tsn': '18034',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érable à épis',
    'name': 'Acer spicatum',
    'tsn': '28758',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érable à sucre',
    'name': 'Acer saccharum',
    'tsn': '28731',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érable argenté',
    'name': 'Acer saccharinum',
    'tsn': '28757',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érable de pennsylvanie',
    'name': 'Acer pensylvanicum',
    'tsn': '28754',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érable rouge',
    'name': 'Acer rubrum',
    'tsn': '28728',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "frêne d'amérique",
    'name': 'Fraxinus americana',
    'tsn': '32931',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'frêne de pennsylvanie',
    'name': 'Fraxinus pennsylvanica',
    'tsn': '32929',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'frêne noir',
    'name': 'Fraxinus nigra',
    'tsn': '32945',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hêtre à grandes feuilles',
    'name': 'Fagus grandifolia',
    'tsn': '19462',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'mélèze laricin',
    'name': 'Larix laricina',
    'tsn': '183412',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'noyer cendré',
    'name': 'Juglans cinerea',
    'tsn': '19250',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "orme d'amérique",
    'name': 'Ulmus americana',
    'tsn': '19049',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'orme de thomas',
    'name': 'Ulmus thomasii',
    'tsn': '19059',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'orme rouge',
    'name': 'Ulmus rubra',
    'tsn': '19050',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ostryer de virginie',
    'name': 'Ostrya virginiana',
    'tsn': '19511',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'peuplier à feuilles deltoïdes',
    'name': 'Populus deltoides',
    'tsn': '22445',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'peuplier à grandes dents',
    'name': 'Populus grandidentata',
    'tsn': '22463',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'peuplier baumier',
    'name': 'Populus balsamifera',
    'tsn': '22453',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'peuplier faux tremble',
    'name': 'Populus tremuloides',
    'tsn': '195773',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pin blanc',
    'name': 'Pinus strobus',
    'tsn': '183385',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pin gris',
    'name': 'Pinus banksiana',
    'tsn': '183319',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pin rouge',
    'name': 'Pinus resinosa',
    'tsn': '183375',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pin sylvestre',
    'name': 'Pinus sylvestris',
    'tsn': '183389',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pommier',
    'name': 'Malus',
    'tsn': '507062',
    'rank': 'genre'
  }, {
    'vernacular_fr': "pruche de l'est",
    'name': 'Tsuga canadensis',
    'tsn': '183397',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sapin baumier',
    'name': 'Abies balsamea',
    'tsn': '18032',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'saule',
    'name': 'Salix',
    'tsn': '22476',
    'rank': 'genre'
  }, {
    'vernacular_fr': "sorbier d'amérique",
    'name': 'Sorbus americana',
    'tsn': '25319',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sorbier des montagnes',
    'name': 'Sorbus aucuparia',
    'tsn': '25320',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'thuya occidental',
    'name': 'Thuja occidentalis',
    'tsn': '505490',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "tilleul d'amérique",
    'name': 'Tilia americana',
    'tsn': '21536',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'actée rouge',
    'name': 'Actaea rubra',
    'tsn': '18723',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'andromède glauque',
    'name': 'Andromeda polifolia',
    'tsn': '23465',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aralie à tige nue',
    'name': 'Aralia nudicaulis',
    'tsn': '29376',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'arisème petit-prêcheur',
    'name': 'Arisaema triphyllum',
    'tsn': '42525',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aronie à fruits noirs',
    'name': 'Aronia melanocarpa',
    'tsn': '25127',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aster à grandes feuilles',
    'name': 'Eurybia macrophylla',
    'tsn': '513449',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleuet à feuilles étroites',
    'name': 'Vaccinium angustifolium',
    'tsn': '23579',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleuet fausse-myrtille',
    'name': 'Vaccinium myrtilloides',
    'tsn': '23604',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'calamagrostide du canada',
    'name': 'Calamagrostis canadensis',
    'tsn': '40544',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'canneberge commune',
    'name': 'Vaccinium oxycoccos',
    'tsn': '505635',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex',
    'name': 'Carex',
    'tsn': '39369',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'carex blanchâtre',
    'name': 'Carex canescens',
    'tsn': '39447',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex chétif',
    'name': 'Carex magellanica',
    'tsn': '501242',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex des bourbiers',
    'name': 'Carex limosa',
    'tsn': '39674',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex oligosperme',
    'name': 'Carex oligosperma',
    'tsn': '39729',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex raide',
    'name': 'Carex stricta',
    'tsn': '39435',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex trisperme',
    'name': 'Carex trisperma',
    'tsn': '39853',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex utriculé',
    'name': 'Carex utriculata',
    'tsn': '501288',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cassandre caliculé',
    'name': 'Chamaedaphne calyculata',
    'tsn': '23637',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chèvrefeuille du canada',
    'name': 'Lonicera canadensis',
    'tsn': '35282',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chicouté',
    'name': 'Rubus chamaemorus',
    'tsn': '24850',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'claytonie de caroline',
    'name': 'Claytonia caroliniana',
    'tsn': '20385',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'clintonie boréale',
    'name': 'Clintonia borealis',
    'tsn': '42903',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'comaret des marais',
    'name': 'Comarum palustre',
    'tsn': '501615',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cypripède acaule',
    'name': 'Cypripedium acaule',
    'tsn': '43534',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'dicentre du canada',
    'name': 'Dicentra canadensis',
    'tsn': '18943',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'droséra à feuilles rondes',
    'name': 'Drosera rotundifolia',
    'tsn': '22017',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'dryoptère spinuleuse',
    'name': 'Dryopteris carthusiana',
    'tsn': '502157',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "érythrone d'amérique",
    'name': 'Erythronium americanum',
    'tsn': '196365',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'fraisier des bois',
    'name': 'Fragaria vesca',
    'tsn': '24634',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gaillet',
    'name': 'Galium',
    'tsn': '34796',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'gymnocarpe du chêne',
    'name': 'Gymnocarpium dryopteris',
    'tsn': '17579',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'if du canada',
    'name': 'Taxus canadensis',
    'tsn': '194885',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'iris versicolore',
    'name': 'Iris versicolor',
    'tsn': '43196',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "kalmia à feuilles d'andromède",
    'name': 'Kalmia polifolia',
    'tsn': '23679',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'kalmia à feuilles étroites',
    'name': 'Kalmia angustifolia',
    'tsn': '503278',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'linaigrette à large gaine',
    'name': 'Eriophorum vaginatum',
    'tsn': '40104',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lycopode brillant',
    'name': 'Huperzia lucidula',
    'tsn': '503079',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'maïanthème du canada',
    'name': 'Maianthemum canadense',
    'tsn': '503653',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'millepertuis de fraser',
    'name': 'Triadenum fraseri',
    'tsn': '21473',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'myrique baumier',
    'name': 'Myrica gale',
    'tsn': '19265',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'némopanthe mucroné',
    'name': 'Ilex mucronata',
    'tsn': '835359',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'noisetier à long bec',
    'name': 'Corylus cornuta',
    'tsn': '19507',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'oxalide de montagne',
    'name': 'Oxalis montana',
    'tsn': '29090',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'petit thé',
    'name': 'Gaultheria procumbens',
    'tsn': '23657',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'phégoptère du hêtre',
    'name': 'Phegopteris connectilis',
    'tsn': '504295',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piléa nain',
    'name': 'Pilea pumila',
    'tsn': '19130',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'platanthère à gorge frangée',
    'name': 'Platanthera blephariglottis',
    'tsn': '43419',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'quatre-temps',
    'name': 'Cornus canadensis',
    'tsn': '27816',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'rhododendron du canada',
    'name': 'Rhododendron canadense',
    'tsn': '23711',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'rhynchospore blanc',
    'name': 'Rhynchospora alba',
    'tsn': '40151',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ronce pubescente',
    'name': 'Rubus pubescens',
    'tsn': '25028',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sarracénie pourpre',
    'name': 'Sarracenia purpurea',
    'tsn': '21993',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'saule baumier',
    'name': 'Salix pyrifolia',
    'tsn': '22575',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'smilacine à grappes',
    'name': 'Maianthemum racemosum',
    'tsn': '503655',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'smilacine trifoliée',
    'name': 'Maianthemum trifolium',
    'tsn': '503657',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'spirée à larges feuilles',
    'name': 'Spiraea alba',
    'tsn': '25329',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'spirée tomenteuse',
    'name': 'Spiraea tomentosa',
    'tsn': '25342',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'streptope à feuilles embrassantes',
    'name': 'Streptopus amplexifolius',
    'tsn': '43044',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'streptope rose',
    'name': 'Streptopus lanceolatus',
    'tsn': '507878',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sureau rouge',
    'name': 'Sambucus racemosa',
    'tsn': '35326',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'thé du labrador',
    'name': 'Rhododendron groenlandicum',
    'tsn': '520050',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'trichophore cespiteux',
    'name': 'Trichophorum cespitosum',
    'tsn': '508143',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'trientale boréale',
    'name': 'Trientalis borealis',
    'tsn': '24053',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'trille rouge',
    'name': 'Trillium erectum',
    'tsn': '43070',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "viorne bois-d'orignal",
    'name': 'Viburnum lantanoides',
    'tsn': '35265',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'viorne cassinoïde',
    'name': 'Viburnum nudum',
    'tsn': '35252',
    'rank': 'espèce'
  }, {
    'name': 'Achalarus lyciades',
    'tsn': '706794',
    'rank': 'espèce'
  }, {
    'name': 'Agraulis vanillae',
    'tsn': '777975',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleu arctique',
    'name': 'Agriades glandon',
    'tsn': '778186',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie poivrée',
    'name': 'Amblyscirtes hegon',
    'tsn': '706576',
    'rank': 'espèce'
  }, {
    'name': 'Amblyscirtes oslari',
    'tsn': '706580',
    'rank': 'espèce'
  }, {
    'name': 'Amblyscirtes simius',
    'tsn': '706583',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie violacée',
    'name': 'Amblyscirtes vialis',
    'tsn': '706586',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie à logan',
    'name': 'Anatrytone logan',
    'tsn': '707256',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie délicate',
    'name': 'Ancyloxypha numitor',
    'tsn': '706668',
    'rank': 'espèce'
  }, {
    'name': 'Anthocharis sara',
    'tsn': '777758',
    'rank': 'espèce'
  }, {
    'name': 'Anthocharis stella',
    'tsn': '778526',
    'rank': 'espèce'
  }, {
    'name': 'Apodemia mormo',
    'tsn': '201268',
    'rank': 'espèce'
  }, {
    'name': 'Ascia monuste',
    'tsn': '777784',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon du microcoulier',
    'name': 'Asterocampa celtis',
    'tsn': '778004',
    'rank': 'espèce'
  }, {
    'name': 'Asterocampa clyton',
    'tsn': '778006',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sachem',
    'name': 'Atalopedes campestris',
    'tsn': '706589',
    'rank': 'espèce'
  }, {
    'name': 'Atrytonopsis hianna',
    'tsn': '706596',
    'rank': 'espèce'
  }, {
    'name': 'Battus philenor',
    'tsn': '777692',
    'rank': 'espèce'
  }, {
    'name': 'Boloria alberta',
    'tsn': '777987',
    'rank': 'espèce'
  }, {
    'name': 'Boloria astarte',
    'tsn': '777988',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria des prés',
    'name': 'Boloria bellona',
    'tsn': '188580',
    'rank': 'espèce'
  }, {
    'name': 'Boloria epithore',
    'tsn': '777986',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria des tourbières',
    'name': 'Boloria eunomia',
    'tsn': '188570',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria de freya',
    'name': 'Boloria freija',
    'tsn': '188575',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria nordique',
    'name': 'Boloria frigga',
    'tsn': '188577',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria terne',
    'name': 'Boloria improba',
    'tsn': '777984',
    'rank': 'espèce'
  }, {
    'name': 'Boloria napaea',
    'tsn': '778194',
    'rank': 'espèce'
  }, {
    'name': 'Boloria natazhati',
    'tsn': '777989',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria polaire',
    'name': 'Boloria polaris',
    'tsn': '188576',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'boloria à taches argentées',
    'name': 'Boloria selene',
    'tsn': '188567',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys affinis',
    'tsn': '777837',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin brun',
    'name': 'Callophrys augustinus',
    'tsn': '188501',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys barryi',
    'tsn': '778747',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin du pin gris',
    'name': 'Callophrys eryphon',
    'tsn': '777854',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue vedâtre',
    'name': 'Callophrys grynea',
    'tsn': '777841',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin des bleuets',
    'name': 'Callophrys henrici',
    'tsn': '777852',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin givré',
    'name': 'Callophrys irus',
    'tsn': '777851',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys johnsoni',
    'tsn': '777848',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin des tourbières',
    'name': 'Callophrys lanoraieensis',
    'tsn': '777853',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys mossii',
    'tsn': '201261',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin des pins',
    'name': 'Callophrys niphon',
    'tsn': '188504',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin grisâtre',
    'name': 'Callophrys polia',
    'tsn': '777850',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys rosneri',
    'tsn': '778748',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys sheridanii',
    'tsn': '777839',
    'rank': 'espèce'
  }, {
    'name': 'Callophrys spinetorum',
    'tsn': '777847',
    'rank': 'espèce'
  }, {
    'name': 'Calpodes ethlius',
    'tsn': '117280',
    'rank': 'espèce'
  }, {
    'name': 'Calycopis cecrops',
    'tsn': '777860',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'échiquier',
    'name': 'Carterocephalus palaemon',
    'tsn': '188607',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'azur printanier du nord',
    'name': 'Celastrina ladon',
    'tsn': '777893',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'asur estival',
    'name': 'Celastrina neglecta',
    'tsn': '777896',
    'rank': 'espèce'
  }, {
    'name': 'Celastrina',
    'tsn': '188522',
    'rank': 'genre'
  }, {
    'name': 'Cercyonis oetus',
    'tsn': '778125',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre des prés',
    'name': 'Cercyonis pegala',
    'tsn': '778122',
    'rank': 'espèce'
  }, {
    'name': 'Cercyonis sthenele',
    'tsn': '778124',
    'rank': 'espèce'
  }, {
    'name': 'Chlosyne acastus',
    'tsn': '778076',
    'rank': 'espèce'
  }, {
    'name': 'Chlosyne damoetas',
    'tsn': '778079',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'damier gorgone',
    'name': 'Chlosyne gorgone',
    'tsn': '778071',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'damier de harris',
    'name': 'Chlosyne harrisii',
    'tsn': '188582',
    'rank': 'espèce'
  }, {
    'name': 'Chlosyne hoffmanni',
    'tsn': '778074',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'damier argenté',
    'name': 'Chlosyne nycteis',
    'tsn': '778070',
    'rank': 'espèce'
  }, {
    'name': 'Chlosyne palla',
    'tsn': '778078',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre fauve des maritimes',
    'name': 'Coenonympha nipisiquit',
    'tsn': '779475',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre fauve',
    'name': 'Coenonympha tullia',
    'tsn': '778111',
    'rank': 'espèce'
  }, {
    'name': 'Colias alexandra',
    'tsn': '777737',
    'rank': 'espèce'
  }, {
    'name': 'Colias canadensis',
    'tsn': '777741',
    'rank': 'espèce'
  }, {
    'name': 'Colias chippewa',
    'tsn': '188534',
    'rank': 'espèce'
  }, {
    'name': 'Colias christina',
    'tsn': '777736',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade de la luzerne',
    'name': 'Colias eurytheme',
    'tsn': '188528',
    'rank': 'espèce'
  }, {
    'name': 'Colias gigantea',
    'tsn': '777744',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade orangé',
    'name': 'Colias hecla',
    'tsn': '188527',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade intérieur',
    'name': 'Colias interior',
    'tsn': '188530',
    'rank': 'espèce'
  }, {
    'name': 'Colias johanseni',
    'tsn': '777740',
    'rank': 'espèce'
  }, {
    'name': 'Colias meadii',
    'tsn': '777739',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade verdâtre',
    'name': 'Colias nastes',
    'tsn': '188535',
    'rank': 'espèce'
  }, {
    'name': 'Colias occidentalis',
    'tsn': '777735',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade commun du nord',
    'name': 'Colias pelidne',
    'tsn': '188531',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade du trèfle',
    'name': 'Colias philodice',
    'tsn': '188529',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coliade de booth',
    'name': 'Colias tyche',
    'tsn': '777742',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'monarque',
    'name': 'Danaus plexippus',
    'tsn': '117273',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre perlé',
    'name': 'Enodia anthedon',
    'tsn': '778207',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie à taches argentées',
    'name': 'Epargyreus clarus',
    'tsn': '117282',
    'rank': 'espèce'
  }, {
    'name': 'Erebia anyuica',
    'tsn': '778138',
    'rank': 'espèce'
  }, {
    'name': 'Erebia disa',
    'tsn': '188563',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'alpin à disque rouge',
    'name': 'Erebia discoidalis',
    'tsn': '778134',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'alpin commun',
    'name': 'Erebia epipsodea',
    'tsn': '778133',
    'rank': 'espèce'
  }, {
    'name': 'Erebia fasciata',
    'tsn': '778132',
    'rank': 'espèce'
  }, {
    'name': 'Erebia lafontainei',
    'tsn': '778137',
    'rank': 'espèce'
  }, {
    'name': 'Erebia mackinleyensis',
    'tsn': '778131',
    'rank': 'espèce'
  }, {
    'name': 'Erebia magdalena',
    'tsn': '778130',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'alpin à ocelles rouges',
    'name': 'Erebia mancinus',
    'tsn': '778129',
    'rank': 'espèce'
  }, {
    'name': 'Erebia pawlowskii',
    'tsn': '778148',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'alpin de ross',
    'name': 'Erebia rossii',
    'tsn': '778128',
    'rank': 'espèce'
  }, {
    'name': 'Erebia vidleri',
    'tsn': '778127',
    'rank': 'espèce'
  }, {
    'name': 'Erebia youngi',
    'tsn': '778136',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lutin mystérieux',
    'name': 'Erora laeta',
    'tsn': '777882',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis afranius',
    'tsn': '706738',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis baptisiae',
    'tsn': '706739',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis brizo',
    'tsn': '706740',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis funeralis',
    'tsn': '706741',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis horatius',
    'tsn': '706742',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie givrée',
    'name': 'Erynnis icelus',
    'tsn': '706743',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie du chêne',
    'name': 'Erynnis juvenalis',
    'tsn': '706744',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "hespérie de l'ancolie",
    'name': 'Erynnis lucilius',
    'tsn': '706745',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie tachetée',
    'name': 'Erynnis martialis',
    'tsn': '706746',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis pacuvius',
    'tsn': '706748',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie persius',
    'name': 'Erynnis persius',
    'tsn': '706749',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis propertius',
    'tsn': '706750',
    'rank': 'espèce'
  }, {
    'name': 'Erynnis zarucco',
    'tsn': '706754',
    'rank': 'espèce'
  }, {
    'name': 'Euchloe ausonides',
    'tsn': '777761',
    'rank': 'espèce'
  }, {
    'name': 'Euchloe creusa',
    'tsn': '777764',
    'rank': 'espèce'
  }, {
    'name': 'Euchloe lotta',
    'tsn': '777766',
    'rank': 'espèce'
  }, {
    'name': 'Euchloe naina',
    'tsn': '777762',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'olympe',
    'name': 'Euchloe olympia',
    'tsn': '777763',
    'rank': 'espèce'
  }, {
    'name': 'Euphilotes ancilla',
    'tsn': '777912',
    'rank': 'espèce'
  }, {
    'name': 'Euphilotes battoides',
    'tsn': '117238',
    'rank': 'espèce'
  }, {
    'name': 'Euphydryas chalcedona',
    'tsn': '778054',
    'rank': 'espèce'
  }, {
    'name': 'Euphydryas editha',
    'tsn': '201290',
    'rank': 'espèce'
  }, {
    'name': 'Euphydryas gillettii',
    'tsn': '778053',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'baltimore',
    'name': 'Euphydryas phaeton',
    'tsn': '778057',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie des marais',
    'name': 'Euphyes bimacula',
    'tsn': '706608',
    'rank': 'espèce'
  }, {
    'name': 'Euphyes conspicua',
    'tsn': '777684',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie de dioné',
    'name': 'Euphyes dion',
    'tsn': '706610',
    'rank': 'espèce'
  }, {
    'name': 'Euphyes dukesi',
    'tsn': '706611',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie rurale',
    'name': 'Euphyes vestris',
    'tsn': '706613',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'fritillaire panachée',
    'name': 'Euptoieta claudia',
    'tsn': '777981',
    'rank': 'espèce'
  }, {
    'name': 'Euptoieta hegesia',
    'tsn': '777982',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'petit coliade',
    'name': 'Eurema lisa',
    'tsn': '778214',
    'rank': 'espèce'
  }, {
    'name': 'Eurema mexicana',
    'tsn': '777726',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piéride orangée',
    'name': 'Eurema nicippe',
    'tsn': '778216',
    'rank': 'espèce'
  }, {
    'name': 'Eurytides marcellus',
    'tsn': '777694',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "bleu porte-queue de l'ouest",
    'name': 'Everes amyntula',
    'tsn': '778219',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "bleu porte-queue de l'est",
    'name': 'Everes comyntas',
    'tsn': '778220',
    'rank': 'espèce'
  }, {
    'name': 'Feniseca tarquinius',
    'tsn': '777787',
    'rank': 'espèce'
  }, {
    'name': 'Fixsenia favonius',
    'tsn': '777826',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleu argenté',
    'name': 'Glaucopsyche lygdamus',
    'tsn': '188519',
    'rank': 'espèce'
  }, {
    'name': 'Glaucopsyche piasus',
    'tsn': '777916',
    'rank': 'espèce'
  }, {
    'name': 'Hemiargus isola',
    'tsn': '778224',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia assiniboia',
    'tsn': '706614',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia colorado',
    'tsn': '706616',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie laurentienne et hespérie boréale',
    'name': 'Hesperia comma',
    'tsn': '188611',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia dacotae',
    'tsn': '706618',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia juba',
    'tsn': '706619',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie de léonard',
    'name': 'Hesperia leonardus',
    'tsn': '706620',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia nevada',
    'tsn': '706625',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia ottoe',
    'tsn': '706626',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia pahaska',
    'tsn': '706627',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie indienne',
    'name': 'Hesperia sassacus',
    'tsn': '706628',
    'rank': 'espèce'
  }, {
    'name': 'Hesperia uncas',
    'tsn': '706629',
    'rank': 'espèce'
  }, {
    'name': 'Hylephila phyleus',
    'tsn': '117286',
    'rank': 'espèce'
  }, {
    'name': 'Icaricia icarioides',
    'tsn': '117245',
    'rank': 'espèce'
  }, {
    'name': 'Icaricia lupini',
    'tsn': '777929',
    'rank': 'espèce'
  }, {
    'name': 'Icaricia shasta',
    'tsn': '777927',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon ocellé',
    'name': 'Junonia coenia',
    'tsn': '778049',
    'rank': 'espèce'
  }, {
    'name': 'Leptotes marina',
    'tsn': '777885',
    'rank': 'espèce'
  }, {
    'name': 'Lerema accius',
    'tsn': '706680',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon longs-palpes',
    'name': 'Libytheana carinenta',
    'tsn': '777961',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vice-roi',
    'name': 'Limenitis archippus',
    'tsn': '777969',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'amiral',
    'name': 'Limenitis arthemis',
    'tsn': '188603',
    'rank': 'espèce'
  }, {
    'name': 'Limenitis lorquini',
    'tsn': '777968',
    'rank': 'espèce'
  }, {
    'name': 'Limenitis weidemeyerii',
    'tsn': '777967',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleu nordique',
    'name': 'Lycaeides idas',
    'tsn': '778226',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bleu mélissa',
    'name': 'Lycaeides melissa',
    'tsn': '778227',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena cuprea',
    'tsn': '777789',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena dione',
    'tsn': '777792',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cuivré de la potentille',
    'name': 'Lycaena dorcas',
    'tsn': '188508',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cuivré des marais salés',
    'name': 'Lycaena dospassosi',
    'tsn': '777799',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cuivré des tourbières',
    'name': 'Lycaena epixanthe',
    'tsn': '188509',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cuivré mauve',
    'name': 'Lycaena helloides',
    'tsn': '777800',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena heteronea',
    'tsn': '777797',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bronzé',
    'name': 'Lycaena hyllus',
    'tsn': '777798',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena mariposa',
    'tsn': '777802',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena nivalis',
    'tsn': '777801',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "cuivré d'amérique",
    'name': 'Lycaena phlaeas',
    'tsn': '777788',
    'rank': 'espèce'
  }, {
    'name': 'Lycaena rubida',
    'tsn': '777796',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'petit satyre des bois',
    'name': 'Megisto cymela',
    'tsn': '778120',
    'rank': 'espèce'
  }, {
    'name': 'Nathalis iole',
    'tsn': '777723',
    'rank': 'espèce'
  }, {
    'name': 'Neominois ridingsii',
    'tsn': '778140',
    'rank': 'espèce'
  }, {
    'name': 'Neophasia menapia',
    'tsn': '777770',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'morio',
    'name': 'Nymphalis antiopa',
    'tsn': '188597',
    'rank': 'espèce'
  }, {
    'name': 'Nymphalis californica',
    'tsn': '778040',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'petite vanesse',
    'name': 'Nymphalis milberti',
    'tsn': '188594',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'grande vanesse',
    'name': 'Nymphalis vaualbum',
    'tsn': '188593',
    'rank': 'espèce'
  }, {
    'name': 'Oarisma garita',
    'tsn': '706687',
    'rank': 'espèce'
  }, {
    'name': 'Oarisma poweshiek',
    'tsn': '706688',
    'rank': 'espèce'
  }, {
    'name': 'Ochlodes sylvanoides',
    'tsn': '706633',
    'rank': 'espèce'
  }, {
    'name': 'Oeneis alberta',
    'tsn': '778144',
    'rank': 'espèce'
  }, {
    'name': 'Oeneis alpina',
    'tsn': '778142',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique à nervures blanches',
    'name': 'Oeneis bore',
    'tsn': '778143',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique orangé',
    'name': 'Oeneis chryxus',
    'tsn': '188555',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique des tourbières',
    'name': 'Oeneis jutta',
    'tsn': '188557',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique de macoun',
    'name': 'Oeneis macounii',
    'tsn': '778146',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique mélissa',
    'name': 'Oeneis melissa',
    'tsn': '188561',
    'rank': 'espèce'
  }, {
    'name': 'Oeneis nevadensis',
    'tsn': '778145',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'nordique alpin',
    'name': 'Oeneis polixenes',
    'tsn': '188560',
    'rank': 'espèce'
  }, {
    'name': 'Oeneis rosovi',
    'tsn': '778234',
    'rank': 'espèce'
  }, {
    'name': 'Oeneis uhleri',
    'tsn': '778147',
    'rank': 'espèce'
  }, {
    'name': 'Panoquina ocola',
    'tsn': '706561',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon queue-courte',
    'name': 'Papilio brevicauda',
    'tsn': '188546',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon tigré du canada',
    'name': 'Papilio canadensis',
    'tsn': '777710',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'grand porte-queue',
    'name': 'Papilio cresphontes',
    'tsn': '777702',
    'rank': 'espèce'
  }, {
    'name': 'Papilio eurymedon',
    'tsn': '777714',
    'rank': 'espèce'
  }, {
    'name': 'Papilio glaucus',
    'tsn': '188547',
    'rank': 'espèce'
  }, {
    'name': 'Papilio indra',
    'tsn': '777699',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'machaon',
    'name': 'Papilio machaon',
    'tsn': '777696',
    'rank': 'espèce'
  }, {
    'name': 'Papilio multicaudatus',
    'tsn': '777715',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'papillon du céleri',
    'name': 'Papilio polyxenes',
    'tsn': '188543',
    'rank': 'espèce'
  }, {
    'name': 'Papilio rutulus',
    'tsn': '777713',
    'rank': 'espèce'
  }, {
    'name': 'Papilio troilus',
    'tsn': '777719',
    'rank': 'espèce'
  }, {
    'name': 'Papilio zelicaon',
    'tsn': '777698',
    'rank': 'espèce'
  }, {
    'name': 'Parnassius clodius',
    'tsn': '777686',
    'rank': 'espèce'
  }, {
    'name': 'Parnassius eversmanni',
    'tsn': '777685',
    'rank': 'espèce'
  }, {
    'name': 'Parnassius phoebus',
    'tsn': '777687',
    'rank': 'espèce'
  }, {
    'name': 'Parnassius smintheus',
    'tsn': '777689',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'album',
    'name': 'Parrhasius m',
    'tsn': '777880',
    'rank': 'espèce'
  }, {
    'name': 'Phoebis philea',
    'tsn': '777753',
    'rank': 'espèce'
  }, {
    'name': 'Phoebis sennae',
    'tsn': '777750',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie fuligineuse',
    'name': 'Pholisora catullus',
    'tsn': '706772',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'croissant fauve',
    'name': 'Phyciodes batesii',
    'tsn': '778096',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'croissant nordique',
    'name': 'Phyciodes cocyta',
    'tsn': '778095',
    'rank': 'espèce'
  }, {
    'name': 'Phyciodes mylitta',
    'tsn': '778093',
    'rank': 'espèce'
  }, {
    'name': 'Phyciodes pallidus',
    'tsn': '778092',
    'rank': 'espèce'
  }, {
    'name': 'Phyciodes pratensis',
    'tsn': '779453',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'croissant perlé',
    'name': 'Phyciodes tharos',
    'tsn': '188584',
    'rank': 'espèce'
  }, {
    'name': 'Pieris angelika',
    'tsn': '777776',
    'rank': 'espèce'
  }, {
    'name': 'Pieris marginalis',
    'tsn': '777777',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piéride des crucifères',
    'name': 'Pieris oleracea',
    'tsn': '777778',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piéride du chou',
    'name': 'Pieris rapae',
    'tsn': '188541',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piéride de virginie',
    'name': 'Pieris virginiensis',
    'tsn': '777779',
    'rank': 'espèce'
  }, {
    'name': 'Plebejus saepiolus',
    'tsn': '777924',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie hobomok',
    'name': 'Poanes hobomok',
    'tsn': '706637',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie des roseaux',
    'name': 'Poanes massasoit',
    'tsn': '706638',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie voyageuse',
    'name': 'Poanes viator',
    'tsn': '706641',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie de zabulon',
    'name': 'Poanes zabulon',
    'tsn': '706643',
    'rank': 'espèce'
  }, {
    'name': 'Polites draco',
    'tsn': '706646',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie mystique',
    'name': 'Polites mystic',
    'tsn': '706648',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie à ligne oblique',
    'name': 'Polites origenes',
    'tsn': '706649',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie de peck',
    'name': 'Polites peckius',
    'tsn': '706650',
    'rank': 'espèce'
  }, {
    'name': 'Polites rhesus',
    'tsn': '706651',
    'rank': 'espèce'
  }, {
    'name': 'Polites sabuleti',
    'tsn': '706652',
    'rank': 'espèce'
  }, {
    'name': 'Polites sonora',
    'tsn': '706653',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie à tache costale',
    'name': 'Polites themistocles',
    'tsn': '706655',
    'rank': 'espèce'
  }, {
    'name': 'Polites vibex',
    'tsn': '706656',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone virgule',
    'name': 'Polygonia comma',
    'tsn': '778042',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone à taches vertes',
    'name': 'Polygonia faunus',
    'tsn': '188589',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone gracile',
    'name': 'Polygonia gracilis',
    'tsn': '188590',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone à queue violacée',
    'name': 'Polygonia interrogationis',
    'tsn': '778041',
    'rank': 'espèce'
  }, {
    'name': 'Polygonia oreas',
    'tsn': '778043',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone gris',
    'name': 'Polygonia progne',
    'tsn': '188591',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polygone satyre',
    'name': 'Polygonia satyrus',
    'tsn': '188588',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie à taches vitreuses',
    'name': 'Pompeius verna',
    'tsn': '706657',
    'rank': 'espèce'
  }, {
    'name': 'Pontia beckerii',
    'tsn': '777780',
    'rank': 'espèce'
  }, {
    'name': 'Pontia occidentalis',
    'tsn': '777782',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'piéride damier',
    'name': 'Pontia protodice',
    'tsn': '777781',
    'rank': 'espèce'
  }, {
    'name': 'Pontia sisymbrii',
    'tsn': '777783',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie grisâtre',
    'name': 'Pyrgus centaureae',
    'tsn': '188605',
    'rank': 'espèce'
  }, {
    'name': 'Pyrgus communis',
    'tsn': '706775',
    'rank': 'espèce'
  }, {
    'name': 'Pyrgus ruralis',
    'tsn': '706778',
    'rank': 'espèce'
  }, {
    'name': 'Pyrgus scriptura',
    'tsn': '706779',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "porte-queue d'acadie",
    'name': 'Satyrium acadicum',
    'tsn': '777814',
    'rank': 'espèce'
  }, {
    'name': 'Satyrium behrii',
    'tsn': '777813',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue du chêne',
    'name': 'Satyrium calanus',
    'tsn': '777819',
    'rank': 'espèce'
  }, {
    'name': 'Satyrium californicum',
    'tsn': '777815',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue du caryer',
    'name': 'Satyrium caryaevorum',
    'tsn': '778252',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "porte-queue d'edwards",
    'name': 'Satyrium edwardsii',
    'tsn': '777818',
    'rank': 'espèce'
  }, {
    'name': 'Satyrium fuliginosum',
    'tsn': '777811',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue à bandes brisées',
    'name': 'Satyrium liparops',
    'tsn': '777822',
    'rank': 'espèce'
  }, {
    'name': 'Satyrium saepium',
    'tsn': '777825',
    'rank': 'espèce'
  }, {
    'name': 'Satyrium sylvinum',
    'tsn': '777816',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue abrogé',
    'name': 'Satyrium titus',
    'tsn': '777817',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre des appalaches',
    'name': 'Satyrodes appalachia',
    'tsn': '778253',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'satyre ocellé',
    'name': 'Satyrodes eurydice',
    'tsn': '778254',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'argynne aphrodite',
    'name': 'Speyeria aphrodite',
    'tsn': '777992',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "argynne de l'atlantique",
    'name': 'Speyeria atlantis',
    'tsn': '188565',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria callippe',
    'tsn': '777998',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria coronis',
    'tsn': '777996',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'argynne cybèle',
    'name': 'Speyeria cybele',
    'tsn': '777991',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria edwardsii',
    'tsn': '777995',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria hesperis',
    'tsn': '778001',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria hydaspe',
    'tsn': '778002',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria idalia',
    'tsn': '777993',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria mormonia',
    'tsn': '778003',
    'rank': 'espèce'
  }, {
    'name': 'Speyeria zerene',
    'tsn': '201285',
    'rank': 'espèce'
  }, {
    'name': 'Staphylus hayhurstii',
    'tsn': '706785',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porte-queue gris',
    'name': 'Strymon melinus',
    'tsn': '117263',
    'rank': 'espèce'
  }, {
    'name': 'Thorybes bathyllus',
    'tsn': '706829',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie nuageuse',
    'name': 'Thorybes pylades',
    'tsn': '706834',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie des graminées',
    'name': 'Thymelicus lineola',
    'tsn': '188609',
    'rank': 'espèce'
  }, {
    'name': 'Urbanus proteus',
    'tsn': '117290',
    'rank': 'espèce'
  }, {
    'name': 'Vacciniina optilete',
    'tsn': '778259',
    'rank': 'espèce'
  }, {
    'name': 'Vanessa annabella',
    'tsn': '778036',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vulcain',
    'name': 'Vanessa atalanta',
    'tsn': '188599',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'belle dame',
    'name': 'Vanessa cardui',
    'tsn': '188601',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vanesse de virginie',
    'name': 'Vanessa virginiensis',
    'tsn': '188600',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hespérie verdâtre',
    'name': 'Wallengrenia egeremet',
    'tsn': '706664',
    'rank': 'espèce'
  }, {
    'name': 'Zerene cesonia',
    'tsn': '777746',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lièvre d’amérique',
    'name': 'Lepus americanus',
    'tsn': '180112',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ours noir',
    'name': 'Ursus americanus',
    'tsn': '180544',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'porc-épic d’amérique',
    'name': 'Erethizon dorsatus',
    'tsn': '825295',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'orignal',
    'name': 'Alces alces',
    'tsn': '180703',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cerf de virginie',
    'name': 'Odocoileus virginianus',
    'tsn': '180699',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'linaigrette de virginie',
    'name': 'Eriophorum virginicum',
    'tsn': '40105',
    'rank': 'espèce'
  }, {
    'name': 'Sphagnum rubellum',
    'tsn': '548213',
    'vernacular_fr': 'sphaigne rouge'
  }, {
    'name': 'sphaigne verte',
    'vernacular_fr': 'sphaigne verte'
  }, {
    'vernacular_fr': 'onoclée sensible',
    'name': 'Onoclea sensibilis',
    'tsn': '17637',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lycope à une fleur',
    'name': 'Lycopus uniflorus',
    'tsn': '32257',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'typha à feuilles étroites',
    'name': 'Typha angustifolia',
    'tsn': '42325',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'jonc brévicaude',
    'name': 'Juncus brevicaudatus',
    'tsn': '39253',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gaillet palustre',
    'name': 'Galium palustre',
    'tsn': '34903',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex étoilé',
    'name': 'Carex echinata',
    'tsn': '39582',
    'rank': 'espèce'
  }, {
    'name': 'pellie sp.',
    'vernacular_fr': 'pellie sp.'
  }, {
    'vernacular_fr': 'viorne trilobée',
    'name': 'Viburnum opulus',
    'tsn': '35270',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'benoîte à grandes feuilles',
    'name': 'Geum macrophyllum',
    'tsn': '24654',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pigamon pubescent',
    'name': 'Thalictrum pubescens',
    'tsn': '18678',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'anémone du canada',
    'name': 'Anemonastrum canadense',
    'tsn': '18436',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'populage des marais',
    'name': 'Caltha palustris',
    'tsn': '18454',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'impatiente du cap',
    'name': 'Impatiens capensis',
    'tsn': '29182',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "lycope d'amérique",
    'name': 'Lycopus americanus',
    'tsn': '32254',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'prêle des marais',
    'name': 'Equisetum palustre',
    'tsn': '17153',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex gonflé',
    'name': 'Carex intumescens',
    'tsn': '39403',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'eupatoire maculée',
    'name': 'Eutrochium maculatum',
    'tsn': '780333',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sanguisorbe du canada',
    'name': 'Sanguisorba canadensis',
    'tsn': '25301',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cardamine de pennsylvanie',
    'name': 'Cardamine pensylvanica',
    'tsn': '22772',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'myosotis laxiflore',
    'name': 'Myosotis laxa',
    'tsn': '31691',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'morelle douce-amère',
    'name': 'Solanum dulcamara',
    'tsn': '30414',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'clématite de virginie',
    'name': 'Clematis virginiana',
    'tsn': '18716',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'iris faux-acore',
    'name': 'Iris pseudacorus',
    'tsn': '43194',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'saule à tête laineuse',
    'name': 'Salix eriocephala',
    'tsn': '22528',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bouleau nain',
    'name': 'Betula pumila',
    'tsn': '183525',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'calopogon tubéreux',
    'name': 'Calopogon tuberosus',
    'tsn': '43506',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pogonie langue-de-serpent',
    'name': 'Pogonia ophioglossoides',
    'tsn': '43441',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'linaigrette à feuilles étroites',
    'name': 'Eriophorum angustifolium',
    'tsn': '40080',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex crépu',
    'name': 'Carex crinita',
    'tsn': '39388',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'scirpe à ceinture noire',
    'name': 'Scirpus atrocinctus',
    'tsn': '40243',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'glycérie du canada',
    'name': 'Glyceria canadensis',
    'tsn': '798450',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex stipité',
    'name': 'Carex stipata',
    'tsn': '527159',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'jonc épars',
    'name': 'Juncus effusus',
    'tsn': '39232',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'potentille de norvège',
    'name': 'Potentilla norvegica',
    'tsn': '24730',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'violette sp.',
    'name': 'Viola',
    'tsn': '22030',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'thélyptère des marais',
    'name': 'Thelypteris palustris',
    'tsn': '17251',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex pauciflore',
    'name': 'Carex pauciflora',
    'tsn': '39743',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'saule noir',
    'name': 'Salix nigra',
    'tsn': '22484',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vesce jargeau',
    'name': 'Vicia cracca',
    'tsn': '26335',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'prêle fluviatile',
    'name': 'Equisetum fluviatile',
    'tsn': '17150',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'scirpe noirâtre',
    'name': 'Scirpus atrovirens',
    'tsn': '40227',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'potentille ansérine',
    'name': 'Potentilla anserina',
    'tsn': '24687',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sagittaire à larges feuilles',
    'name': 'Sagittaria latifolia',
    'tsn': '38908',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'zizanie des marais',
    'name': 'Zizania palustris',
    'tsn': '530918',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vigne des rivages',
    'name': 'Vitis riparia',
    'tsn': '28624',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "verge d'or du canada",
    'name': 'Solidago canadensis',
    'tsn': '36224',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'plantain majeur',
    'name': 'Plantago major',
    'tsn': '32887',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex lacustre',
    'name': 'Carex lacustris',
    'tsn': '39409',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lysimache thyrsiflore',
    'name': 'Lysimachia thyrsiflora',
    'tsn': '24000',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'eupatoire perfoliée',
    'name': 'Eupatorium perfoliatum',
    'tsn': '35980',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'asclépiade incarnate',
    'name': 'Asclepias incarnata',
    'tsn': '30241',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "scutellaire à feuilles d'épilobe",
    'name': 'Scutellaria galericulata',
    'tsn': '540512',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lysimaque terrestre',
    'name': 'Lysimachia terrestris',
    'tsn': '23985',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'trille ondulé',
    'name': 'Trillium undulatum',
    'tsn': '43092',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sceau-de-salomon pubescent',
    'name': 'Polygonatum pubescens',
    'tsn': '43007',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'savoyane',
    'name': 'Coptis trifolia',
    'tsn': '18767',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'osmonde cannelle',
    'name': 'Osmundastrum cinnamomeum',
    'tsn': '1012094',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'dennstaedtie à lobules ponctués',
    'name': 'Dennstaedtia punctilobula',
    'tsn': '17491',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lycopode obscur',
    'name': 'Lycopodium obscurum',
    'tsn': '17032',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lycopode claviforme',
    'name': 'Lycopodium clavatum',
    'tsn': '17024',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'dalibarde rampante',
    'name': 'Rubus repens',
    'tsn': '520495',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'fougère-aigle',
    'name': 'Pteridium aquilinum',
    'tsn': '17224',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'médéole de virginie',
    'name': 'Medeola virginiana',
    'tsn': '42963',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'monotrope uniflore',
    'name': 'Monotropa uniflora',
    'tsn': '23778',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épigée rampante',
    'name': 'Epigaea repens',
    'tsn': '23646',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'osmonde de clayton',
    'name': 'Osmunda claytoniana',
    'tsn': '17220',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'bouleau glanduleux',
    'name': 'Betula glandulosa',
    'tsn': '19485',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hypne plumeuse',
    'name': 'Ptilium crista-castrensis',
    'tsn': '16320',
    'rank': 'espèce'
  }, {
    'name': 'Bryophyta',
    'vernacular_fr': 'mousse',
    'tsn': '14189',
    'rank': 'espèce'
  }, {
    'name': 'Sphagnaceae',
    'vernacular_fr': 'sphaigne',
    'tsn': '15682',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'polytric',
    'name': 'Polytrichum ',
    'tsn': '15758',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'urubu',
    'name': 'Cathartes',
    'tsn': '175264',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'raton laveurs',
    'name': 'Procyon lotor',
    'tsn': '180575',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gélinotte huppée',
    'name': 'Tetraoninae',
    'tsn': '175790',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'salicaire pourpre',
    'name': 'Lythrum salicaria',
    'tsn': '27079',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gadelier amer',
    'name': 'Ribes triste',
    'tsn': '24504',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'saule discolor',
    'name': 'Salix discolor',
    'tsn': '22524',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lysimache ciliée',
    'name': 'Lysimachia ciliata',
    'tsn': '23984',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'carex de michaud',
    'name': 'Carex michauxiana',
    'tsn': '39695',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "verge d'or sp.",
    'name': 'Solidago',
    'tsn': '36223',
    'rank': 'genre'
  }, {
    'vernacular_fr': "tussilage pas-d'âne",
    'name': 'Tussilago farfara',
    'tsn': '38583',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'vigne vierge à cinq folioles',
    'name': 'Parthenocissus quinquefolia',
    'tsn': '28602',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'coléoptère',
    'name': 'Coleoptera',
    'tsn': '109216',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'carabes',
    'name': 'Carabidae',
    'tsn': '109234',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'araignée',
    'name': 'Arachnida',
    'tsn': '82708',
    'rank': 'classe'
  }, {
    'vernacular_fr': 'fourmis',
    'name': 'Formicidae',
    'tsn': '154193',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'orthoptère',
    'name': 'Orthoptera  ',
    'tsn': '102160',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'collembole',
    'name': 'Collembola',
    'tsn': '99237',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'faucheux',
    'name': 'Opiliones',
    'tsn': '82753',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'acarien',
    'name': 'Acarina',
    'tsn': '82754',
    'rank': 'sous-classe'
  }, {
    'vernacular_fr': 'millepatte',
    'name': 'Myriapoda',
    'tsn': '563885',
    'rank': 'sous-embranchement'
  }, {
    'vernacular_fr': 'cloporte',
    'name': 'Isopoda',
    'tsn': '92120',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'pseudoscorpion',
    'name': 'Pseudoscorpiones',
    'tsn': '690741',
    'rank': 'ordre'
  }, {
    'name': 'larve',
    'vernacular_fr': 'larve'
  }, {
    'vernacular_fr': 'mollusque',
    'name': 'Mollusca',
    'tsn': '69458',
    'rank': 'embranchement'
  }, {
    'name': 'inconnu',
    'vernacular_fr': 'inconnu'
  }, {
    'vernacular_fr': 'diptère',
    'name': 'Diptera',
    'tsn': '118831',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'hyménoptère',
    'name': 'Ichneumonoidea',
    'tsn': '152865',
    'rank': 'super-famille'
  }, {
    'vernacular_fr': 'punaise',
    'name': 'Miridae',
    'tsn': '104419',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'puce',
    'name': 'Siphonaptera ',
    'tsn': '152732',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'trichoptère',
    'name': 'Trichoptera',
    'tsn': '115095',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'salamandre',
    'name': 'Caudata',
    'tsn': '173584',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'grenouille',
    'name': 'Anura',
    'tsn': '173423',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'puceron',
    'name': 'Aphidoidea',
    'tsn': '109190',
    'rank': 'super-famille'
  }, {
    'vernacular_fr': 'lépidoptère',
    'name': 'Lepidoptera',
    'tsn': '117232',
    'rank': 'ordre'
  }, {
    'vernacular_fr': 'mécoptère',
    'name': 'Mecoptera',
    'tsn': '114994',
    'rank': 'ordre'
  }, {
    'name': 'Platynus decentis',
    'tsn': '110391',
    'rank': 'espèce'
  }, {
    'name': 'Pterostichus coracinus',
    'tsn': '110520',
    'rank': 'espèce'
  }, {
    'name': 'Pterostichus rostratus',
    'tsn': '110454',
    'rank': 'espèce'
  }, {
    'name': 'Elateridae',
    'tsn': '113879',
    'rank': 'famille'
  }, {
    'name': 'Agonum retractum',
    'tsn': '110340',
    'rank': 'espèce'
  }, {
    'name': 'Staphilinidae',
    'tsn': '113265',
    'rank': 'famille'
  }, {
    'name': 'Pterostichus adstrictus',
    'tsn': '110510',
    'rank': 'espèce'
  }, {
    'name': 'Pterostichus tristis',
    'tsn': '932298',
    'rank': 'espèce'
  }, {
    'name': 'Sphaeroderus nitidicollis brevoorti',
    'tsn': '933341',
    'rank': 'espèce'
  }, {
    'name': 'Nitidulidae',
    'tsn': '114290',
    'rank': 'famille'
  }, {
    'name': 'Pterostichus pensylvanicus',
    'tsn': '110511',
    'rank': 'espèce'
  }, {
    'name': 'Notiophilus aeneus',
    'tsn': '109533',
    'rank': 'espèce'
  }, {
    'name': 'Melandryidae',
    'tsn': '114452',
    'rank': 'famille'
  }, {
    'name': 'Calathus advena',
    'tsn': '110820',
    'rank': 'espèce'
  }, {
    'name': 'Calathus ingratus',
    'tsn': '110839',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'caloptérygides',
    'name': 'Calopterygidae',
    'tsn': '102043',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'caloptéryx à taches apicales',
    'name': 'Calopteryx aequabilis',
    'tsn': '102056',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'caloptéryx élancé',
    'name': 'Calopteryx amata',
    'tsn': '102057',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'caloptéryx bistré',
    'name': 'Calopteryx maculata',
    'tsn': '102055',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "courtisane d'amérique",
    'name': 'Hetaerina americana',
    'tsn': '102050',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lestides',
    'name': 'Lestidae',
    'tsn': '102058',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'leste tardif',
    'name': 'Lestes congener',
    'tsn': '102062',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste disjoint',
    'name': 'Lestes disjunctus',
    'tsn': '102063',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste dryade',
    'name': 'Lestes dryas',
    'tsn': '102066',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste flamboyant',
    'name': 'Lestes eurinus',
    'tsn': '102073',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste à forceps',
    'name': 'Lestes forcipatus',
    'tsn': '102067',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste inégal',
    'name': 'Lestes inaequalis',
    'tsn': '102069',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste élancé',
    'name': 'Lestes rectangularis',
    'tsn': '102071',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste onguiculé',
    'name': 'Lestes unguiculatus',
    'tsn': '102068',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leste matinal',
    'name': 'Lestes vigilax',
    'tsn': '102072',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrionides',
    'name': 'Coenagrionidae',
    'tsn': '102077',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'agrion rougeâtre',
    'name': 'Amphiagrion saucium',
    'tsn': '102095',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'argie violacée',
    'name': 'Argia fumipennis',
    'tsn': '102143',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'argie svelte',
    'name': 'Argia moesta',
    'tsn': '102146',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion à tache jaune',
    'name': 'Chromagrion conditum',
    'tsn': '102134',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion ponctué',
    'name': 'Coenagrion interrogatum',
    'tsn': '102158',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion résolu',
    'name': 'Coenagrion resolutum',
    'tsn': '102156',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "agrion d'anna",
    'name': 'Enallagma anna',
    'tsn': '592485',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "agrion porte-coupes d'amérique",
    'name': 'Enallagma annexum',
    'tsn': '722162',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion arc-en-ciel',
    'name': 'Enallagma antennatum',
    'tsn': '102103',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion saupoudré',
    'name': 'Enallagma aspersum',
    'tsn': '102126',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion boréal',
    'name': 'Enallagma boreale',
    'tsn': '102121',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion des scirpes',
    'name': 'Enallagma carunculatum',
    'tsn': '102123',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion civil',
    'name': 'Enallagma civile',
    'tsn': '102122',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion halophile',
    'name': 'Enallagma clausum',
    'tsn': '102132',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion enivré',
    'name': 'Enallagma ebrium',
    'tsn': '102128',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion exilé',
    'name': 'Enallagma exsulans',
    'tsn': '102112',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion minuscule',
    'name': 'Enallagma geminatum',
    'tsn': '102113',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion de hagen',
    'name': 'Enallagma hageni',
    'tsn': '102129',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion orangé',
    'name': 'Enallagma signatum',
    'tsn': '102115',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion dévoyé',
    'name': 'Enallagma traviatum',
    'tsn': '102116',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion printanier',
    'name': 'Enallagma vernale',
    'tsn': '102131',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion vespéral',
    'name': 'Enallagma vesperum',
    'tsn': '102119',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion hasté',
    'name': 'Ischnura hastata',
    'tsn': '206632',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion posé',
    'name': 'Ischnura posita',
    'tsn': '102082',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'agrion vertical',
    'name': 'Ischnura verticalis',
    'tsn': '102079',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'déesse gracieuse',
    'name': 'Nehalennia gracilis',
    'tsn': '102138',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'déesse paisible',
    'name': 'Nehalennia irene',
    'tsn': '102137',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschnides',
    'name': 'Aeshnidae',
    'tsn': '101596',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'aeschne du canada',
    'name': 'Aeshna canadensis',
    'tsn': '185977',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne clepsydre',
    'name': 'Aeshna clepsydra',
    'tsn': '592654',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne constrictor',
    'name': 'Aeshna constricta',
    'tsn': '101609',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne porte-crosses',
    'name': 'Aeshna eremita',
    'tsn': '185978',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne domino',
    'name': 'Aeshna interrupta',
    'tsn': '185979',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne des joncs',
    'name': 'Aeshna juncea',
    'tsn': '185981',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne septentrionale',
    'name': 'Aeshna septentrionalis',
    'tsn': '185982',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne à zigzags',
    'name': 'Aeshna sitchensis',
    'tsn': '185983',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne subarctique',
    'name': 'Aeshna subarctica',
    'tsn': '185984',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne à tubercules',
    'name': 'Aeshna tuberculifera',
    'tsn': '185980',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne des pénombres',
    'name': 'Aeshna umbrosa',
    'tsn': '101605',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne verticale',
    'name': 'Aeshna verticalis',
    'tsn': '101607',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'anax précoce',
    'name': 'Anax junius',
    'tsn': '101598',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'anax ardent',
    'name': 'Anax longipes',
    'tsn': '101599',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne printanière',
    'name': 'Basiaeschna janata',
    'tsn': '101649',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne fuligineuse',
    'name': 'Boyeria grafiana',
    'tsn': '101646',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne vineuse',
    'name': 'Boyeria vinosa',
    'tsn': '101647',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne majestueuse',
    'name': 'Epiaeschna heros',
    'tsn': '101638',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne pygmée',
    'name': 'Gomphaeschna furcillata',
    'tsn': '101635',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne cyrano',
    'name': 'Nasiaeschna pentacantha',
    'tsn': '101654',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'aeschne des nénuphars',
    'name': 'Rhionaeschna mutata',
    'tsn': '722026',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphides',
    'name': 'Gomphidae',
    'tsn': '101664',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'gomphe cornu',
    'name': 'Arigomphus cornutus',
    'tsn': '101772',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe fourchu',
    'name': 'Arigomphus furcifer',
    'tsn': '101773',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe épineux',
    'name': 'Dromogomphus spinosus',
    'tsn': '101732',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe fraternel',
    'name': 'Gomphurus fraternus',
    'tsn': '101782',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe-cobra',
    'name': 'Gomphurus vastus',
    'tsn': '101789',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe ventru',
    'name': 'Gomphurus ventricosus',
    'tsn': '101790',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'hagénie',
    'name': 'Hagenius brevistylus',
    'tsn': '101735',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe jumeau',
    'name': 'Gomphus adelphus',
    'tsn': '592862',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe minuscule',
    'name': 'Lanthus parvulus',
    'tsn': '101768',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe bariolé',
    'name': 'Ophiogomphus anomalus',
    'tsn': '101746',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe saupoudré',
    'name': 'Ophiogomphus aspersus',
    'tsn': '101747',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe de carole',
    'name': 'Ophiogomphus carolus',
    'tsn': '101745',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe boréal',
    'name': 'Ophiogomphus colubrinus',
    'tsn': '101755',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe du maine',
    'name': 'Ophiogomphus mainensis',
    'tsn': '101739',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'ophiogomphe roussâtre',
    'name': 'Ophiogomphus rupinsulensis',
    'tsn': '101740',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe boréal',
    'name': 'Gomphus borealis',
    'tsn': '101707',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe descriptif',
    'name': 'Gomphus descriptus',
    'tsn': '101705',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe exilé',
    'name': 'Gomphus exilis',
    'tsn': '101679',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe livide',
    'name': 'Gomphus lividus',
    'tsn': '101685',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe pointu',
    'name': 'Gomphus spicatus',
    'tsn': '101714',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe des sables',
    'name': 'Progomphus obscurus',
    'tsn': '101720',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe à styles blancs',
    'name': 'Stylogomphus albistylus',
    'tsn': '101762',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe riverain',
    'name': 'Stylurus amnicola',
    'tsn': '593018',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe marqué',
    'name': 'Stylurus notatus',
    'tsn': '593022',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe de scudder',
    'name': 'Stylurus scudderi',
    'tsn': '593025',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gomphe fléché',
    'name': 'Stylurus spiniceps',
    'tsn': '593026',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulégastrides',
    'name': 'Cordulegastridae',
    'tsn': '102026',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'cordulégastre aux yeux séparés',
    'name': 'Cordulegaster diastatops',
    'tsn': '102028',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulégastre maculé',
    'name': 'Cordulegaster maculata',
    'tsn': '102031',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulégastre oblique',
    'name': 'Cordulegaster obliqua',
    'tsn': '102032',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'macromides',
    'name': 'Macromiidae',
    'tsn': '102019',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'macromie brune',
    'name': 'Didymops transversa',
    'tsn': '101852',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'macromie noire',
    'name': 'Macromia illinoiensis',
    'tsn': '101921',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulides',
    'name': 'Corduliidae',
    'tsn': '102020',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'cordulie de shurtleffer',
    'name': 'Cordulia shurtleffii',
    'tsn': '102015',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie écorcée',
    'name': 'Dorocordulia libera',
    'tsn': '101856',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque canine',
    'name': 'Epitheca canis',
    'tsn': '102036',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque à queue de beagle',
    'name': 'Epitheca cynosura',
    'tsn': '185986',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque princière',
    'name': 'Epitheca princeps',
    'tsn': '185985',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque épineuse',
    'name': 'Epitheca spinigera',
    'tsn': '185987',
    'rank': 'espèce'
  }, {
    'vernacular_fr': "épithèque d'uhler",
    'name': 'Helocordulia uhleri',
    'tsn': '101880',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque de brunelle',
    'name': 'Neurocordulia michaeli',
    'tsn': '593381',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'épithèque de provancher',
    'name': 'Neurocordulia yamaskanensis',
    'tsn': '101937',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie annelée',
    'name': 'Somatochlora albicincta',
    'tsn': '101952',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de robert',
    'name': 'Somatochlora brevicincta',
    'tsn': '101964',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie ceinturée',
    'name': 'Somatochlora cingulata',
    'tsn': '101954',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie allongée',
    'name': 'Somatochlora elongata',
    'tsn': '101955',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie tricoteuse',
    'name': 'Somatochlora filosa',
    'tsn': '101956',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie fourchue',
    'name': 'Somatochlora forcipata',
    'tsn': '101966',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de franklin',
    'name': 'Somatochlora franklini',
    'tsn': '101967',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie incurvée',
    'name': 'Somatochlora incurvata',
    'tsn': '101970',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de kennedy',
    'name': 'Somatochlora kennedyi',
    'tsn': '101957',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie linéaire',
    'name': 'Somatochlora linearis',
    'tsn': '101949',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie mineure',
    'name': 'Somatochlora minor',
    'tsn': '101958',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie septentrionale',
    'name': 'Somatochlora septentrionalis',
    'tsn': '101974',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie ténébreuse',
    'name': 'Somatochlora tenebrosa',
    'tsn': '101950',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de walsh',
    'name': 'Somatochlora walshii',
    'tsn': '101960',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de whitehouse',
    'name': 'Somatochlora whitehousei',
    'tsn': '101975',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie de williamson',
    'name': 'Somatochlora williamsoni',
    'tsn': '101961',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'cordulie bistrée',
    'name': 'Williamsonia fletcheri',
    'tsn': '101829',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'libellulides',
    'name': 'Libellulidae',
    'tsn': '101797',
    'rank': 'famille'
  }, {
    'vernacular_fr': 'célithème indienne',
    'name': 'Celithemis elisa',
    'tsn': '101843',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'célithème géante',
    'name': 'Celithemis eponina',
    'tsn': '101844',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érythème des étangs',
    'name': 'Erythemis simplicicollis',
    'tsn': '101866',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'érythrodiplax côtier',
    'name': 'Erythrodiplax berenice',
    'tsn': '101873',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'julienne',
    'name': 'Ladona julia',
    'tsn': '101884',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine frigide',
    'name': 'Leucorrhinia frigida',
    'tsn': '101890',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine glaciale',
    'name': 'Leucorrhinia glacialis',
    'tsn': '101886',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine',
    'name': 'Leucorrhinia',
    'tsn': '101885',
    'rank': 'genre'
  }, {
    'vernacular_fr': 'leucorrhine hudsonienne',
    'name': 'Leucorrhinia hudsonica',
    'tsn': '101887',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine mouchetée',
    'name': 'Leucorrhinia intacta',
    'tsn': '101888',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine nordique',
    'name': 'Leucorrhinia patricia',
    'tsn': '101891',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'leucorrhine apprivoisée',
    'name': 'Leucorrhinia proxima',
    'tsn': '101892',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'voluptueuse',
    'name': 'Libellula incesta',
    'tsn': '101900',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'mélancolique',
    'name': 'Libellula luctuosa',
    'tsn': '101894',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'gracieuse',
    'name': 'Libellula pulchella',
    'tsn': '101895',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'quadrimaculée',
    'name': 'Libellula quadrimaculata',
    'tsn': '101896',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'chaleureuse',
    'name': 'Libellula semifasciata',
    'tsn': '101903',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'elfe',
    'name': 'Nannothemis bella',
    'tsn': '101933',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pachydiplax',
    'name': 'Pachydiplax longipennis',
    'tsn': '101799',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pantale flavescente',
    'name': 'Pantala flavescens',
    'tsn': '101801',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'pantale bimaculée',
    'name': 'Pantala hymenaea',
    'tsn': '101802',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'périthème délicate',
    'name': 'Perithemis tenera',
    'tsn': '101804',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'lydienne',
    'name': 'Plathemis lydia',
    'tsn': '101809',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum bagarreur',
    'name': 'Sympetrum corruptum',
    'tsn': '101978',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum rubigineux',
    'name': 'Sympetrum costiferum',
    'tsn': '101980',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum noir',
    'name': 'Sympetrum danae',
    'tsn': '101991',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum intime',
    'name': 'Sympetrum internum',
    'tsn': '101982',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum de jane',
    'name': 'Sympetrum janeae',
    'tsn': '593346',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum éclaireur',
    'name': 'Sympetrum obtrusum',
    'tsn': '101981',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum à dos roux',
    'name': 'Sympetrum rubicundulum',
    'tsn': '101983',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum semi-ambré',
    'name': 'Sympetrum semicinctum',
    'tsn': '101990',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'sympétrum tardif',
    'name': 'Sympetrum vicinum',
    'tsn': '101979',
    'rank': 'espèce'
  }, {
    'vernacular_fr': 'traméa lacérée',
    'name': 'Tramea lacerata',
    'tsn': '101822',
    'rank': 'espèce'
  }]

)
