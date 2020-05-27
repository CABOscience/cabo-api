
UPDATE ref_species SET category = 'plantes' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '202422-%';
UPDATE ref_species SET category = 'poissons' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-161061-%';
UPDATE ref_species SET category = 'oiseaux' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-174371-%';
UPDATE ref_species SET category = 'amphibiens' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-173420-%';
UPDATE ref_species SET category = 'arthropodes' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-82696-%';
UPDATE ref_species SET category = 'mammifères' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-179913-%';
UPDATE ref_species SET category = 'reptiles' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text) WHERE ref_species.tsn = h.tsn AND h.hierarchy_string LIKE '%-173747-%';

UPDATE ref_species SET category = 'arthropodes' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text), dblink('dbname=ITIS','SELECT tsn, tsn_accepted FROM synonym_links') AS a(tsn INT, tsn_accepted INT) WHERE a.tsn_accepted = h.tsn AND a.tsn=ref_species.tsn AND h.hierarchy_string LIKE '%-82696-%';

UPDATE ref_species SET category = 'plantes' FROM dblink('dbname=ITIS','SELECT tsn, hierarchy_string FROM hierarchy') AS h(tsn INT, hierarchy_string text), dblink('dbname=ITIS','SELECT tsn, tsn_accepted FROM synonym_links') AS a(tsn INT, tsn_accepted INT) WHERE a.tsn_accepted = h.tsn AND a.tsn=ref_species.tsn AND h.hierarchy_string LIKE '202422-%';