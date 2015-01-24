function map(seed, w, h, callback) {

    // lol how do you like this clojurescript
    setTimeout(function() {
        console.log("map - start");
        var r = new SeedableRandom(seed);
        
        console.log("map - simplex");
        // Used to generate our landscape.
        var p = new noise.SimplexNoise(r);
        
        var tiles = [];
        
        console.log("map - loop");
        console.log(new Date());
        for (var y = 0; y < h; y++) {
            var tileRow = [];
            tiles.push(tileRow);
            for (var x = 0; x < w; x++) {
                var detail = Math.abs(p.noise(x / 300.0, y / 300.0));
                var desert1 = -p.noise(x / 100.0, y / 100.0);
                var desert2 = p.noise(x / 10.0, y / 10.0);
                var desertp = desert1 * detail + desert2 * (1.0 - detail);
                
                var waterp = p.noise(x / 150.0, y / 150.0);
                var roadsp = (Math.abs(p.noise(x / 50.0, y / 50.0)));
                
                var treep = Math.max(0, p.noise(x / 300.0, y / 300.0)) + p.noise(x / 3.0, y / 3.0);
                
                // water
                var oasis = desertp > 0.95;
                var lake = desertp < -0.6;
                var river = desert1 < 0.6 && Math.abs(waterp) < 0.075;
                // desert
                var desert = desertp > 0.6 && desertp < 1.0 || desert1 > 0.8;
                // roads
                var roads = Math.abs(roadsp) < 0.05;
                var riversideRoads = desertp < 0.6 && Math.abs(waterp) < 0.11 && Math.abs(waterp > 0.08);
                // trees
                var trees = treep > 0.5;
                
                if (lake || river || oasis) {
			// water
                    terrain = 0;
                }
                else if (roads || riversideRoads) {
			// road
                    terrain = 1;
                } 
                else if (desert) {
			// sand
                    terrain = 2;
                } 
                else if (trees) {
			// trees
                    terrain = 3;
                } 
                else {
			// grass
                    terrain = 4;
                }
                
                // Add our landscape tile to the grid (table) output.
                tileRow.push(terrain);
            }
        }
        
        console.log(new Date());
        console.log("map - done");
        callback(tiles);
        // return tiles;
    }, 100);
}
