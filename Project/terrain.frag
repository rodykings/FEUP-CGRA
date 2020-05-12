#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;
void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);

	gl_FragColor = color;
}