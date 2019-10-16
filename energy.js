
        // Create the WorldWindow.
        var wwd = new WorldWind.WorldWindow("canvasOne");

        // Create and add layers to the WorldWindow.
        var layers = [
            // Imagery layers.
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.BingAerialLayer(null), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
            {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
            // Add atmosphere layer on top of all base layers.
            //{layer: new WorldWind.AtmosphereLayer(), enabled: true},
            // WorldWindow UI layers.
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        function getdata(){
             // Web Map Service information from NASA's Near Earth Observations WMS
        var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
        // Named layer displaying Average Temperature data
        var item = document.getElementById('mySelect').value;
        var layerName = item;

        if(item=="MOD_LSTD_CLIM_M"){
            var img = document.createElement("img");
            img.src = "e1.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MCD43C3_M_BSA"){
            var img = document.createElement("img");
            img.src = "e2.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOD_LSTN_CLIM_M"){
            var img = document.createElement("img");
            img.src = "e3.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AVHRR_CLIM_M"){
            var img = document.createElement("img");
            img.src = "e4.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="GISS_TA_M"){
            var img = document.createElement("img");
            img.src = "e5.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOD_LSTAD_M"){
            var img = document.createElement("img");
            img.src = "e6.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOD_LSTAN_M"){
            var img = document.createElement("img");
            img.src = "e7.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOD_LSTD_M"){
            var img = document.createElement("img");
            img.src = "e8.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MOD_LSTN_M"){
            var img = document.createElement("img");
            img.src = "e9.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="CERES_NETFLUX_M"){
            var img = document.createElement("img");
            img.src = "e10.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="CERES_LWFLUX_M"){
            var img = document.createElement("img");
            img.src = "e11.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="CERES_SWFLUX_M"){
            var img = document.createElement("img");
            img.src = "e12.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AVHRR_SST_M"){
            var img = document.createElement("img");
            img.src = "e13.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MWOI_SST_M"){
            var img = document.createElement("img");
            img.src = "e14.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="MYD28M"){
            var img = document.createElement("img");
            img.src = "e15.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AMSRE_SSTAn_M"){
            var img = document.createElement("img");
            img.src = "e16.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="CERES_INSOL_M"){
            var img = document.createElement("img");
            img.src = "e17.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }

        if(item=="AURA_UVI_CLIM_M"){
            var img = document.createElement("img");
            img.src = "e18.png";
            var src = document.getElementById("x");            
            src.appendChild(img);          
        }


        // Called asynchronously to parse and create the WMS layer
        var createLayer = function (xmlDom) {
            // Create a WmsCapabilities object from the XML DOM
            var wms = new WorldWind.WmsCapabilities(xmlDom);
            // Retrieve a WmsLayerCapabilities object by the desired layer name
            var wmsLayerCapabilities = wms.getNamedLayer(layerName);
            // Form a configuration object from the WmsLayerCapability object
            var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
            // Modify the configuration objects title property to a more user friendly title
            wmsConfig.title = "Average Surface Temp";
            // Create the WMS Layer from the configuration object
            var wmsLayer = new WorldWind.WmsLayer(wmsConfig);

            // Add the layers to WorldWind and update the layer manager
            wwd.addLayer(wmsLayer);
            layerManager.synchronizeLayerList();
        };

        // Called if an error occurs during WMS Capabilities document retrieval
        var logError = function (jqXhr, text, exception) {
            console.log("There was a failure retrieving the capabilities document: " + text + " exception: " + exception);
        };

        $.get(serviceAddress).done(createLayer).fail(logError);

        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);
        }

       