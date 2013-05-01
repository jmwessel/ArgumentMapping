var stage;
var layer;

module( "Canvas", {
	setup: function() {
		stage = new Kinetic.Stage({
        	container: 'stage-container',
        	width: 1024,
        	height: 768,
        	draggable: true
        });

        layer = new Kinetic.Layer();
      
        stage.add(layer);
	},
	teardown: function() {
		// clean up after each test
	}
});

test( "Canvas Test", function() {
	ok( stage, "does stage exist?" );  
});


test("Box Creation Test", function() {
	premise = createBox(20,20);
	ok(premise, "Box is created");
})

test( "Line Creation Test", function() {
	box1 = createBox(0,0);
	box2 = createBox(100,100);
	
	ok(!lineInProgress, "line not in progress");
	lineAttempt.call(box1);
	ok(lineInProgress, "line in progress");
	lineAttempt.call(box2);
	ok(!lineInProgress, "line finished");
});

test("Box Removal Test", function(){
    box = createBox(0,0);
    selectBox(box);
    ok(selectedBox, "Box is selected");
    ok(selectedBox.destroy, "Box is deleted");
    selectedBox = null;	
 });

test("Box Toggle test", function(){
    box1 = createBox(20,20);
    ok(!selectedBox, "Box is not selected");
    selectBox(box1);
    ok(selectedBox, "Box is selected");
	
});

test( "Line Drag Test:", function() {
	box1 = createBox(0,0);
	box2 = createBox(100,100);
	line = createConnector(box1,box2);
	box1.setX(5);
	box1.setY(5);
	updateLines.call(box1);
	ok(line.getPoints()[0].x === 5 + box1.get(".outline")[0].getWidth() / 2, "LineStart.x = ");
	ok(line.getPoints()[0].y === 5 + box1.get(".outline")[0].getHeight() / 2, "LineStart.y = ");
});