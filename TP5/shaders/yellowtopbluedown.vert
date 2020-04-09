attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec4 position;
uniform float normScale;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);

	offset=aVertexPosition*normScale*0.1*vec3(sin(timeFactor), 1, 1);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
	position = gl_Position;
}

