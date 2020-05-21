#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
varying vec3 vVertexPosition;
uniform float nsupplies;


void main() {
	vec4 color;
	
	float cutoff = nsupplies / 5.0;
	float red;
	float green;

	if(vVertexPosition.x > cutoff-0.5) {
		color = vec4(0.4,0.4,0.4,1.0);
		
	}else{
		red = -vVertexPosition.x + 0.5;
		green = vVertexPosition.x + 0.5;
		color = vec4(red, green,0.0,1.0);
	}

	gl_FragColor = color;
}